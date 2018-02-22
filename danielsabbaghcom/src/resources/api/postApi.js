import {noView} from 'aurelia-framework';
//import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';

@noView
export class PostApi {
    constructor() {
        this.httpClient = new HttpClient();

        console.log('postApi constructor, hello');
    }

    fetchBlogPostFake(blogPostId) {
        console.log('happy noise');

        return [4];
    }
    
    async fetchBlogPost(blogPostId) {
        // until I design a more intelligent post retrieval
        // scheme (for which I'll move posts from the static
        // assets part of this project to a database or something)
        // I'll just fetch the file from /static or something

        console.log('fetchin post ' + blogPostId + " ...");

        // create post filename maybe?
        // then I can return an actual blogPost object


        let contents = '';
        await this.httpClient.fetch('https://baconipsum.com/api/?type=meat-and-filler')
            .then(response => {
                console.log('got response');
                contents = response.json();
            });        

        return contents;
    }
}