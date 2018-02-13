import {noView} from 'aurelia-framework';
import 'fetch';
//import {HttpClient} from 'aurelia-fetch-client';

@noView
export class PostApi {
    constructor() {
        //this.httpClient = new HttpClient();
    }

    activate(urlParams, routeMap, navigationInstruction) {
        console.log('activate of post called!');
    }


    fetchBlogPost(blogPostId) {
        // until I design a more intelligent post retrieval
        // scheme (for which I'll move posts from the static
        // assets part of this project to a database or something)
        // I'll just fetch the file from /static or something

        console.log('fetchin post ' + blogPostId + " ...");

        // create post filename
        let blogPostContents = 'lorem ipsum yadda yadda yadda';
        //let blogPostContent = this.retrieveBlogPost(blogPostId);
    }

    retrieveBlogPost(blogPostId) {
        /*
        this.httpClient.fetch('https://baconipsum.com/api/?type=meat-and-filler')
            .then(response => response.json())
            .then(data => {
                console.log(data.description);
            });
            */
    }
}