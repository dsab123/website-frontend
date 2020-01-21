import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Home {
    
    constructor(PostApi) { 
        this.postApi = PostApi;

        this.message = "Home";
        this.postsList = [];

        this.isLoading = true;
        this.initialLoadingText = "Loading";
        this.loadingText = '';

        this.loadingTextTagline = "(why is this loading taking so long? click \'About\'!)"

        this.numberOfRecentPostBlurbsToFetch = 10;
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    async getMostRecentBlogPostBlurbs() {
        for (let i = 0; i < this.numberOfRecentPostBlurbsToFetch; i++) {

            // TODO check if instanceof BlogPost
            await this.postApi.retrieveBlogPostBlurb(i).then((data) => {
                if (data.id != -1) {
                    this.postsList.push(data);
                }
            });
        }
    }

    activate(urlParams, routeMap, navigationInstruction) {
        this.spinLoadingText();

        this.getMostRecentBlogPostBlurbs().then(() => {
            this.isLoading = false;
        });
    }

    async spinLoadingText() {
        let dots = ['.', '..', '...', '..'];
        let count = 0;

        while (this.isLoading) {
            this.loadingText = this.initialLoadingText + dots[count++ % dots.length];            
            await this.sleep(400);
        }
    }
}