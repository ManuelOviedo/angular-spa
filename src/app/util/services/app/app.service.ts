import { Injectable } from '@angular/core';

/**
 * @description DOM object referenced by this instance of JQuery.
 * @typedef {JQuery} $ jQueryDomObject
 * @property {any} $ Instance of JQuery for right use of it's properties. 
 */
declare var $: any;

/**
 * @description Service that calls every function needed generally for the app's performance.
 * @export {class} AppService
 * @class AppService
 * @module AppService
 */
@Injectable({
  providedIn: 'root'
})
export class AppService {

  /**
   * @description Creates an instance of AppService.
   * @memberof AppService
   */
  constructor() { }

  /**
   * @description SEO setting Function.
   * @param {*} [seo=null]
   * @memberof InitializerService
  */
  setMetas(seo: any = null){
    if(seo != null){
      $('title').html( 'Sespec | ' + seo.title );
      $('meta[name="description"]').attr('content', seo.description);
      $('meta[name="keywords"]').attr('content', seo.keywords);
    }else{
      $('title').html( 'Shell for angular  |' );
      $('meta[name="description"]').attr('content', '...');
      $('meta[name="keywords"]').attr('content', '...');
    }
  }

  fadeElement(element: string){
    if( $(element).is(':visible') ){
      $(element).fadeOut(1500);
    }
  }

}
