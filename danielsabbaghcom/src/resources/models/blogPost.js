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
}