import {inject} from 'aurelia-framework';

import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Post {

    constructor(PostApi) {
        this.postApi = PostApi;
        this.postId = '1';

        console.log('constructor called');
    }

    activate(urlParams, routeMap, navigationInstruction) {
        // check for post id from router?

        console.log('postId: ' + this.postId);

        this.postApi.fetchBlogPost(this.postId);
    }
}