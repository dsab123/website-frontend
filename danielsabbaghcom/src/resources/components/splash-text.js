import {bindable} from 'aurelia-framework';

export class SplashTextCustomElement {
    @bindable loadingTextTagline;
    @bindable initialLoadingText;

    constructor() {
        this.loadingText = '';
    }

    bind(bindingContext, overrideContext) {
        this.spinLoadingText();
    }

    async spinLoadingText() {
        let dots = ['.', '..', '...', '..'];
        let count = 0;

        while (true) {
            this.loadingText = this.initialLoadingText + dots[count++ % dots.length];
            await this.sleep(400);
        }
    }
}