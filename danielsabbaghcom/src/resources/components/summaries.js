import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Summaries {
    constructor(PostApi) {
        this.postApi = PostApi;

        this.intro = "I like to read pretty widely, from tech to theology to bestsellers. Below you'll find a review for each of the books I've read, along with a link to buy. Drop me a line if you purchase any of these!";
        this.disclaimer = "I'm a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.";
        this.moneyPlea = "If you have found this content helpful, please consider supporting my work through paypal by clicking on the coffee cup at the bottom of this page."
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