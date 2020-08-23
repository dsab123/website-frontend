import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Summaries {
    constructor(PostApi) {
        this.postApi = PostApi;

        this.intro = "I like to read pretty widely, from tech to theology to bestsellers. I've included a blurb of each of these books, along with an amazon affiliate link to buy. Drop me a line if you buy any of these!";
        this.disclaimer = "I'm a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.";
        this.summaries = [];
        this.flag = false;
    }

    activate() {
      // this.spinLoadingText(), when I get to this

      this.getBookSummaryLookup();
    }

    async getBookSummaryLookup() {
      await this.postApi.getBookSummaryLookup().then((data) => {
        this.summaries = data;
      });
    }
}