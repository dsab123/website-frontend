import {noView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {BlogPost} from '../models/blogPost';

@noView
export class PostApi {
    constructor() {
        this.httpClient = new HttpClient();

        console.log('postApi constructor, hello');
    }
    
    async retrieveBlogPost(blogPostId) {

        let contents = await this.fetchBlogPostContents(blogPostId);

        return new BlogPost({
            id: blogPostId, 
            title: `Fake Post ${blogPostId}`, 
            content: contents 
        });
    }

    async fetchBlogPostContents(blogPostId) {
        // until I design a more intelligent post retrieval
        // scheme (for which I'll move posts from the static
        // assets part of this project to a database or something)
        // I'll just fetch the file from /static or something

        let contents = '';
        await this.httpClient.fetch('https://baconipsum.com/api/?type=meat-and-filler')
            .then(response => {
                console.log('got response');
                contents = response.json();
            });        

        return contents;
    }
}