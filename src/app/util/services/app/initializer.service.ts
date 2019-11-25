import { Injectable } from '@angular/core';

/**
 * @description DOM object referenced by this instance of JQuery.
 * @typedef {JQuery} $ jQueryDomObject
 * @property {any} $ Instance of JQuery for right use of it's properties. 
 */
declare var $: any;

/**
 * @description Service that initializes every global element/module withing the html page here should be (TypeScript tranlsated) instances of initial Youtube, functionalities and plugins.
 * @export {class} InitializerService
 * @class InitializerService
 * @module InitializerService
 */
@Injectable({
  providedIn: 'root'
})
export class InitializerService {

  /**
   * @description Creates an instance of InitializerService.
   * @memberof InitializerService
   */
  constructor() { }

}