import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Header {

    constructor(Router) {
        this.router = Router;
        this.title = "Daniel Sabbagh";
    }

    activate(urlParams, routeMap, navigationInstruction) {
        console.log('header activate called!');
    
    }
}