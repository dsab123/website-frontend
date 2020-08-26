import {noView} from 'aurelia-framework';
import {BlogPost} from '../models/blogPost';
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

    async getBookSummaryLookup() {
        let contents = [];
        // NOTE: not using fetch() for these because the fetch client
        // converts the response into a stupid ReadableStream, which I abhor
        await this.httpClient.get(`${this.baseUrl}booksummary-lookup`)
        .then(response =>  {
            contents = response.json();
        });

        return contents;
    }

    async getBookSummaryInfo(summaryId) {
        let contents = [];
        // NOTE: not using fetch() for these because the fetch client
        // converts the response into a stupid ReadableStream, which I abhor
        await this.httpClient.get(`${this.baseUrl}booksummary?summary_id=${summaryId}`)
        .then(response =>  {
            contents = response.json();
        });

        return contents;
    }

    async retrieveBlogPost(blogPostId, qs = '') {

        let contents = await this.fetchBlogPost(blogPostId, qs);

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

    async fetchBlogPost(blogPostId, qs) {
        let contents = '';

        if (isNaN(blogPostId)) {
            return null;
        }

        let url = `${this.baseUrl}blogpost/${blogPostId}${qs}`;
        await this.httpClient.fetch(url)
            .then(response => {
                contents = response.json();
            });                    

        return contents;
    }

    async getRelatedPostsByTag(tagName) {
        let url = `${this.baseUrl}tags/${tagName}`;
        let contents = [];

        await this.httpClient.fetch(url)
        .then(response => {
            contents = response.json();
        })

        return contents;
    }   
}