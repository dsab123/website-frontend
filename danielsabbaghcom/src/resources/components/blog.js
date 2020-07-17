import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';
import {BlogPostBlurb} from '../models/blogPostBlurb';
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

        // properties for related posts by tag
        this.relatedPosts = [];
        this.filteredRelatedPosts = [];
        this.showRelatedPosts = false;
        this.selectedRelatedPostTag = null;
        this.numberOfRelatedPostBlurbsToFetch = 5;
    }

    activate(urlParams, routeMap, navigationInstruction) {
        if (urlParams && urlParams.postId) {
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
            this.relatedPosts = data.relatedPosts;

            // undim post contents
            this.dimPostContents = false;
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

    showRelatedPostsByTag(relatedPostTag, shouldShowRelatedPosts) {
        // user clicked on different postTag, but we still want to show related posts
        if (shouldShowRelatedPosts == false && this.selectedRelatedPostTag != relatedPostTag) {
            shouldShowRelatedPosts = true;
        }

        if (shouldShowRelatedPosts == true) {
            if (this.relatedPosts && this.relatedPosts.length > 0) {
                this.filteredRelatedPosts = this.relatedPosts.filter(post => post.tags.includes(relatedPostTag));
                this.showRelatedPosts = true;
            } else {
                this.showRelatedPosts = true;
            }
        } else {
            // only collapse the section if its the same postTag as before, and we were showing relatedPosts
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