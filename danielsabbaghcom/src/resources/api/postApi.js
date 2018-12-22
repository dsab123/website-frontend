import {noView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {BlogPost} from '../models/blogPost';
import {BlogPostBlurb} from '../models/blogPostBlurb';

@noView
export class PostApi {
    constructor() {
        this.httpClient = new HttpClient();

        this.numberOfBlogPostBlurbsToFetch = 5;
    }
    
    // method naming scheme - 'fetch' is prefix of any method
    // that directly uses the fetch client; 'retrieve' is the 
    // prefix of any method that doesn't

    async retrieveBlogPost(blogPostId) {

        let contents = await this.fetchBlogPostContents(blogPostId);

        if (contents != null) {
            return new BlogPost({
                id: blogPostId,
                title: contents.Metadata.Title,
                content: contents.Content,
                tags: contents.Metadata.Tags
            })
        }

        /*
        return new BlogPost({
            id: blogPostId, 
            title: `Fake Post ${blogPostId}`, 
            content: contents,
            tags: 'food,meat,shark'
        });
        */
    }

    async fetchBlogPostContents(blogPostId) {
        // until I design a more intelligent post retrieval
        // scheme (for which I'll move posts from the static
        // assets part of this project to a database or something)
        // I'll just fetch the file from /static or something

        let contents = '';
        let url = 'https://7dfaiqkhk5.execute-api.us-east-1.amazonaws.com/stage/blogpost/'
         + blogPostId;
        await this.httpClient.fetch(url)
            .then(response => {
                contents = response.json();
            });        

        return contents;
    }

    async retrieveBlogPostBlurb(blogPostId) {

        let contents = await this.fetchBlogPostContents(blogPostId);

        return new BlogPostBlurb({
            id: blogPostId, 
            title: `Fake Post ${blogPostId}`, 
            teaser: contents[0].substr(0, 40) + "..."
        });
    }

    async fetchBlogPostBlurbContents(blogPostId) {
        // until I design a more intelligent post retrieval
        // scheme (for which I'll move posts from the static
        // assets part of this project to a database or something)
        // I'll just fetch the file from /static or something

        let contents = '';

        await this.httpClient.fetch('https://baconipsum.com/api/?type=meat-and-filler')
            .then(response => {
                contents = response.json();
            });        

        return contents; // should like to substring this
    }

    async retrieveBlogPostBlurbsByTag(blogPostTag) {
        let blogPostBlurbs = [];
        //let contents = await this.fetchBlogPostBlurbsByTag(blogPostTag);
        let contents = new Array(5);

        for (let i = 0; i < contents.length; i++) {

            // TODO when the back end is done, the marshaling will move upstream
            // to the 'fetch' methods
            blogPostBlurbs.push(new BlogPostBlurb({
                id: i, 
                title: `Fake Post ${i}`, 
                teaser: "in a land far far away, where the back end is completed..."
            }));

            // TODO not sure how to resolve promise one by one, so I am doing this
            // terrible thing. fix it
            /*
            blogPostBlurbs.push(new BlogPostBlurb({
                id: i, 
                title: `Fake Post ${i}`, 
                teaser: contents[0].substr(0, 40) + "..."
            }));
            */
        }
    
        return blogPostBlurbs;
    }

    async fetchBlogPostBlurbsByTag(blogPostTag) {
        let contents = [];

        for (let i = 0; i < this.numberOfBlogPostBlurbsToFetch; i++) {
            await this.httpClient.fetch('https://baconipsum.com/api/?type=meat-and-filler')
                .then(response => {
                    contents.push(response.json());
                });        
        }

        for (let i = 0; i < contents.length; i++) {
            Promise.resolve(contents[i]);
        }

        return contents;
    }
}