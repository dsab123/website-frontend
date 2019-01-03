import { Metadata } from "./metadata";

export class BlogPost {
    constructor(data = {}) {
        this.id = 0; // an id of -1 is essentially an error object
        this.content = '';
        this.blurb = false;
        
        this.metadata = new Metadata();

        this.relatedPosts = {};
        Object.assign(this, data);
    }

    static createErrorBlogPost() {
        let blogPost = new BlogPost();
        blogPost.id = -1;
        blogPost.content = 'Looks like there was an error somewhere. \n\nShhh.\n\nDon\'t tell anyone.',
        blogPost.metadata = {
            'title' : 'Whoops, something happened',
            'tags' : ['error handling']
        }
        
        return blogPost;
    }
}