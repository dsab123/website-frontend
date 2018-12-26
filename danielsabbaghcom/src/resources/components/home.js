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
        for (let i = 0; i < this.numberOfRecentPostBlurbsToFetch; i++) {

            // TODO check if instanceof BlogPost
            this.postApi.retrieveBlogPostBlurb(i).then((data) => {
                if (data.id != -1) {
                    this.postsList.push(data);
                }
            });
        }
    }
}