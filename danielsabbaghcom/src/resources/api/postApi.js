import {noView} from 'aurelia-framework';

@noView
export class PostApi {
    constructor() {



    }


    fetchPost(postId) {
        console.log('fetchin post ' + postId + " ...");

        // fetch static file containing the post id
    }
}