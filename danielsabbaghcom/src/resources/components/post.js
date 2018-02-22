import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Post {

    constructor(PostApi) {
        this.postApi = PostApi;
        this.postId = '1';

        this.postTitle = 'fee fi fo fum';
        this.postContents = 'foods';
    }

    activate(urlParams, routeMap, navigationInstruction) {
        // check for post id from router?

        console.log('post activate called');
        this.getPostContents();
        console.log('after postContents set');
    }

    async getPostContents() {
        this.postApi.fetchBlogPost(this.postId).then((data) => {            
            this.postContents = data;
        });
    }
}