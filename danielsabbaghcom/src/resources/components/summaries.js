import {inject} from 'aurelia-framework';
import {PostApi} from '../api/postApi';

@inject(PostApi)
export class Summaries {
    
    constructor(PostApi) {
        this.intro = "I like to read pretty widely, from tech to theology to bestsellers. I've included a blurb of each of these books, along with an amazon affiliate link. Drop me a line if you buy any of these!";
        this.disclaimer = "I'm a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.";
        this.summaries =  [
              {
                title: "Spurgeon's Sorrows",
                author: "Zack Eswine",
                link: "http://www.amazon.com/jjeifjwojwe--123",
                teaser: "Might it surprise you to know that the 'Prince of Preachers' suffered from great depression?",
                image: "static/spurgeons_sorrows.jpg"
              },
              {
                title: "Job - The Wisdom of the Cross",
                author: "Christopher Ash",
                link: "http://www.amazon.com/jjeifjwojwe--abc",
                teaser: "'Job is not a book about suffering in general... it is a book about how God treats His friends.'",
                image: "static/job.jpg"
              },
              {
                title: "Tarzan",
                author: "Edgar Rice Burroughs",
                link: "http://www.amazon.com/jjeifjwojwe--drm",
                teaser: "If you've only seen the Disney adaptation, you're missing out on great details they had to leave out!",
                image: "static/tarzan.jpg"
              }
        ];
    }
}