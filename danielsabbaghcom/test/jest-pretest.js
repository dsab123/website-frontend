import 'aurelia-polyfills';
 
import {Options} from 'aurelia-loader-nodejs';
//import {initialize} from 'aurelia-pal-browser'; // I don't know if this is needed?
//import {globalize} from 'aurelia-pal-nodejs';
import * as path from 'path';

Options.relativeToDir = path.join(__dirname, 'unit');
//globalize(); // this, or initialize()?
//initialize(); // I don't know if this is needed?