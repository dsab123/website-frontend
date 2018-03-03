import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Home {
    
    constructor(PostApi) { 
        this.postApi = PostApi;

        this.message = "Home";
        this.postsList = [];
        this.numberOfRecentPostBlurbsToFetch = 10;
    }

    activate(urlParams, routeMap, navigationInstruction) {
        // TODO move the determination of this loop's number of iterations 
        // to postApi's `numberOfBlogPostBlurbsToFetch`
        for (let i = 0; i < this.numberOfRecentPostBlurbsToFetch; i++) {

            // TODO check if instanceof blogPostBlurb
            this.postApi.retrieveBlogPostBlurb(i).then((data) => {        
                this.postsList.push(data)
            });
        }
    }
}