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
        this.getPostContents();
    }

    async getPostContents() {
        this.postApi.retrieveBlogPost(this.postId).then((data) => {            
            this.postContents = data.content;
            this.postTitle = data.title;
            this.postTags = data.tags.split(',');
        });
    }
}