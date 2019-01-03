import {noView} from 'aurelia-framework';
import {BlogPost} from '../models/blogPost';
import {Metadata} from '../models/metadata';
import {BlogPostBlurb} from '../models/blogPostBlurb';
import {Api} from './api';

@noView
export class PostApi extends Api {
    constructor() {
        super();

        this.numberOfBlogPostBlurbsToFetch = 5;
    }
    
    async retrieveBlogPost(blogPostId, qs = '') {

        let contents = await this.fetchBlogPost(blogPostId, qs);

        if (contents != null) {
            return new BlogPost({
                id: contents.id,
                content: contents.content,
                metadata: new Metadata({
                    id: contents.id,
                    title: contents.metadata.title,
                    tags: contents.metadata.tags
                }),
                relatedPosts: contents.relatedPosts
            });
        } else {
            return BlogPost.createErrorBlogPost(); // how to return error object?
        }
    }

    async fetchBlogPost(blogPostId, qs) {
        let contents = '';
        let url = `${this.baseUrl}blogpost/${blogPostId}${qs}`;
        await this.httpClient.fetch(url)
            .then(response => {
                contents = response.json();
            });                    

        return contents;
    }

    async retrieveBlogPostBlurb(blogPostId) {
        let qs = "?blurb=true"; // gotta be a better way
 
        return this.retrieveBlogPost(blogPostId, qs);
    }

    async retrieveBlogPostBlurbsByTag(blogPostTag) {
        let blogPostBlurbs = [];
        // soon will be: 
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