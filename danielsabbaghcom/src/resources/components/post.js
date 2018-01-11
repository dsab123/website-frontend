import {inject} from 'aurelia-framework';

import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Post {

    constructor(PostApi) {
        this.postApi = PostApi;
        this.postId = '1';
    }

    activate(urlParams, routeMap, navigationInstruction) {
        // check for post id from router?

        this.postApi.fetchPost(this.postId);
    }
}