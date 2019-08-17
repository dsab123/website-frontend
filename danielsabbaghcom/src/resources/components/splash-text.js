// import {bindable} from 'aurelia-framework';

// export class SplashTextCustomElement {
//     constructor() {
//         @bindable loadingTextTagline;
//         @bindable loadingText;
        
//         let passedIn = {};
//         passedIn.loadingTextTagline = null;
//         passedIn.loadingText = null;

//         this.initialLoadingText = '';
//     }

//     bind(bindingContext, overrideContext) {
//         this.spinLoadingText();
//     }

//     async spinLoadingText() {
//         let dots = ['.', '..', '...', '..'];
//         let count = 0;

//         while (true) {
//             //loadingText = this.initialLoadingText + dots[count++ % dots.length];
//             await this.sleep(400);
//         }
//     }
// }