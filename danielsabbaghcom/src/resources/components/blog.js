import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';
let showdown = require('showdown');

@inject(PostApi)
export class Blog {

    constructor(PostApi) {
        this.postApi = PostApi;

        // properties for main post
        this.postTitle = null;
        this.postContents = null;
        this.postTags = null;
        this.dimPostContents = false;
        this.isPostLoaded = false;
        this.postId = 1;

        // properties for related posts by tag
        this.relatedPosts = [];
        this.filteredRelatedPosts = [];
        this.showRelatedPosts = false;
        this.selectedRelatedPostTag = null;
    }

    activate(urlParams, routeMap, navigationInstruction) {
        if (urlParams && urlParams.postId) {
            this.postId = urlParams.postId;
            this.getPostContents(urlParams.postId);
        } else {
            this.getPostContents();
        }
    }

    attached() {
        this.setPostContentsContainer();
    }

    async getPostContents(postId) {
        // dim postContents to indicate new post incoming
        this.dimPostContents = true;

        if (!postId) {
            postId = this.getDefaultPostId();
        }
    
        this.postApi.retrieveBlogPost(postId).then((data) => {
            let converter = new showdown.Converter({
                simpleLineBreaks: 'true' // TODO move this to config
            });

            this.postContents = converter.makeHtml(data.content);
            this.setPostContentsContainer();

            this.postTitle = data.title;
            this.postTags = data.tags;

            // undim post contents
            this.dimPostContents = false;
            this.isPostLoaded = true;
        });
    }

    setPostContentsContainer() {
        if (this.postContentsContainer) {
            this.postContentsContainer.innerHTML = this.postContents;
        }
    }

    getDefaultPostId() {
        return 1;
    }

    async showRelatedPostsByTag(relatedPostTag, shouldShowRelatedPosts) {
        if (this.selectedRelatedPostTag == null || this.selectedRelatedPostTag != relatedPostTag) {
            // if selected related tag is null, user hasn't clicked one yet; if this, or if
            // they're clicking on a new tag, load new tags
            this.relatedPosts = await this.postApi.getRelatedPostsByTag(relatedPostTag);
            this.relatedPosts = this.relatedPosts.filter(post => post.id != this.postId);
            this.showRelatedPosts = true;
        } else if (shouldShowRelatedPosts == true && this.selectedRelatedPostTag == relatedPostTag) {    
            // if we want to show related posts, and the new tag is the same as the old, we will
            // have already loaded the related posts, so just show them
            if (this.relatedPosts && this.relatedPosts.length > 0) {
                this.showRelatedPosts = true;
            }
        } else {
            // only collapse the section if its the same tag as before, and we were showing relatedPosts
            this.showRelatedPosts = false;
        }

        this.selectedRelatedPostTag = relatedPostTag;
    }

    resetScroll() {
        // empty div hook is fastest, but not cleanest; hope I've named it clearly enough!
        document.querySelector('#empty-div-hook-for-scrolling').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
}