import { Injectable } from '@angular/core';

/**
 * @description DOM object referenced by this instance of JQuery.
 * @typedef {JQuery} $ jQueryDomObject
 * @property {any} $ Instance of JQuery for right use of it's properties. 
 */
declare var $: any;

/**
 * @description Service that modifies/deletes/edit/reinitialize properties from every possible plugin used by the entire app.
 * @export
 * @class PluginsService
 */
@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  /**
   * @description Creates an instance of PluginsService.
   * @memberof PluginsService
   */
  constructor() { }
}
