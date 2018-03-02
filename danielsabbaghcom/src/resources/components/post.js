import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Post {

    constructor(PostApi) {
        this.postApi = PostApi;
        this.postId = '1';

        this.postTitle = null;
        this.postContents = null;
        this.postTags = null;
    }

    activate(urlParams, routeMap, navigationInstruction) {
        // check for post id from router?
        if (urlParams.postId) {
            this.getPostContents(urlParams.postId);
        } else {
            this.getPostContents();
        }

    }

    async getPostContents(postId) {
        if (!postId) {
            postId = this.getDefaultPostId();
        }

        this.postApi.retrieveBlogPost(postId).then((data) => {            
            this.postContents = data.content;
            this.postTitle = data.title;
            this.postTags = data.tags.split(',');
        });
    }

    getDefaultPostId() {
        return 1;
    }
}