import {Talk} from '../models/talk';

export class Talks {
    constructor() {
        this.talksList = [];
    }

    activate(urlParams, routeMap, navigationInstruction) {
        // check for post id from router?
        this.talksList = this.getTalksList();
    }

    // will want to retrieve these more intelligently at some point in the future, obvi
    getTalksList() {
        return [
            new Talk({
                id: 1,
                title: "Front-End Unit Testing",
                description: "This presentation will discuss benefits of writing unit tests, broadly explain the basic concepts involved, give examples of front-end tests, and provide an optional interactive portion using a project’s full build pipeline.",
                slides: "coming soon",
                recording: "coming soon",
                date: "2018-02-09"
            }),
            new Talk({
                id: 2,
                title: "Back-End Unit Testing",
                description: "ain't no description here yet lols",
                slides: "coming soon",
                recording: "coming soon",
                date: "2017-05-08"
            })
        ];
    }
}