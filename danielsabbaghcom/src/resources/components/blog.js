import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';
import {BlogPostBlurb} from '../models/blogPostBlurb';

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
        this.selectedRelatedPost = null;
        this.postsTaggedPrefix = 'Posts tagged ';
        this.numberOfRelatedPostBlurbsToFetch = 5;
    }

    activate(urlParams, routeMap, navigationInstruction) {
        this.hideRelatedPostsByTag();

        // check for post id from router?
        if (urlParams.postId) {
            this.getPostContents(urlParams.postId);
        } else {
            this.getPostContents();
        }
        // cannot use this here because window is not available at this point?
        //this.resetScroll();
    }

    // TODO probs don't need this async prefix
    async getPostContents(postId) {
        // dim postContents to indicate new post incoming
        this.dimPostContents = true;

        if (!postId) {
            postId = this.getDefaultPostId();
        }
    
        this.postApi.retrieveBlogPost(postId).then((data) => {

            // TODO check if data instance of blogPost
            this.postContents = data.content;
            this.postTitle = data.metadata.title;
            this.postTags = data.metadata.tags;
            this.relatedPosts = data.relatedPosts;

            // undim post contents
            this.dimPostContents = false;
        });
    }

    getDefaultPostId() {
        return 1;
    }

/*
    async getRelatedPostsByTag(postTag) {
        // we need to clear out the related posts array, or it'll fill up to infinity
        // setting relatedPosts to [] will trigger moving the 'related' section down
        this.relatedPosts = [];
        this.selectedRelatedPost = postTag;
        this.showRelatedPosts = true;

        // TODO implement with this.numberOfRelatedPostBlurbsToFetch
        this.postApi.retrieveBlogPostBlurbsByTag(postTag).then((data) => {
            if (!Array.isArray(data)) {
                console.log('ERROR: data is not array');
            }

            for (let i = 0; i < data.length; i++) {
                if (!data[i] instanceof BlogPostBlurb) {
                    console.log('ERROR: data[i] is not instance of BlogPostBlurb');    
                }

                this.relatedPosts.push(data[i]);
            }
        });        
    }
*/

    showRelatedPostsByTag(postTag) {
        this.selectedRelatedPost = postTag;

        this.filteredRelatedPosts = this.relatedPosts.filter(post => post.metadata.tags.includes(postTag));
        this.showRelatedPosts = true;


    }

    hideRelatedPostsByTag() {
        this.showRelatedPosts = false;

    }

    resetScroll() {
        // empty div hook is fastest, but not cleanest; hope I've named it clearly enough!
        document.querySelector('#empty-div-hook-for-scrolling').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
}