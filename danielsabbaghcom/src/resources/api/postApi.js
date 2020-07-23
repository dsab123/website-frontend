import {noView} from 'aurelia-framework';
import {BlogPost} from '../models/blogPost';
import {BlogPostBlurb} from '../models/blogPostBlurb';
import {Api} from './api';

@noView
export class PostApi extends Api {
    constructor() {
        super();

        this.numberOfBlogPostBlurbsToFetch = 7;
    }
    
    async getBlogPostLookup() {
        let contents = [];
        await this.httpClient.fetch(`${this.baseUrl}blogpost-lookup`)
        .then(response => {
            contents = response.json();
        });

        return contents;
    }

    async getBlogPost(blogPostId, qs = '') {
        if (isNaN(blogPostId)) {
            return null;
        }

        let url = `${this.baseUrl}blogpost/${blogPostId}${qs}`;
        let contents = null;

        await this.httpClient.fetch(url)
            .then(response => {
                contents = response.json();
            });           

        if (contents != null) {
            return new BlogPost({
                id: contents.id,
                content: contents.content,
                title: contents.title,
                tags: contents.tags,
                slug: contents.slug,
                relatedPosts: contents.relatedPosts
            });
        } else {
            return BlogPost.createErrorBlogPost();
        }
    }

    async 
}