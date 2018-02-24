import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Home {
    
    constructor(PostApi) { 
        this.postApi = PostApi;

        this.message = "Home";
        this.postsList = [];
        this.numberOfRecentPostBlurbsToFetch = 3;
    }

    activate(urlParams, routeMap, navigationInstruction) {
        for (let i = 0; i < this.numberOfRecentPostBlurbsToFetch; i++) {
            this.postApi.retrieveBlogPostBlurb(i).then((data) => {        
                this.postsList.push(data)
            });
        }
    }
}