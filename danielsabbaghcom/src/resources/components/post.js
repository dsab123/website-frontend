import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';
import {BlogPostBlurb} from '../models/blogPostBlurb';

@inject(PostApi)
export class Post {

    constructor(PostApi) {
        this.postApi = PostApi;

        // properties for main post
        this.postTitle = null;
        this.postContents = null;
        this.postTags = null;

        // properties for related posts by tag
        this.relatedPosts = [];
        this.selectedRelatedPost = null;
        this.numberOfRelatedPostBlurbsToFetch = 5;
    }

    activate(urlParams, routeMap, navigationInstruction) {
        // check for post id from router?
        if (urlParams.postId) {
            this.getPostContents(urlParams.postId);
        } else {
            this.getPostContents();
        }

    }

    // TODO probs don't need this async prefix
    async getPostContents(postId) {
        if (!postId) {
            postId = this.getDefaultPostId();
        }

        this.postApi.retrieveBlogPost(postId).then((data) => {

            // TODO check if data instance of blogPost
            this.postContents = data.content;
            this.postTitle = data.title;
            this.postTags = data.tags.split(',');
        });
    }

    getDefaultPostId() {
        return 1;
    }


    async getRelatedPostsByTag(postTag) {
        this.selectedRelatedPost = postTag;

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
}