import {noView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@noView
export class SummaryApi {
    constructor() {
        this.httpClient = new HttpClient();
        this.httpClient.configure(config => {
            config
                .withBaseUrl('api/')
                .withDefaults({
                    headers: {
                        'Authorization': 'token a2c1f64ef69f4f15db5cb091828337c5473125d4',
                        'Accept': 'application/vnd.github.v3.raw'
                    }
            })
        });

        this.baseUrl = 'https://api.github.com/repos/dsab123/book-summaries/contents/summaries/'; 
    }

    async getBookSummaryContents(bookTitle) {
        let contents = [];

        await this.httpClient.get(`${this.baseUrl}${bookTitle}`)
        .then(response => response.text()
        .then(data => {contents = data}));

        return contents;
    }
}