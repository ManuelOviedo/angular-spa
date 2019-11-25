import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

/**
 * @description Service that provides calls to any environmented endpoint.
 * @export {class} ContentManagementService
 * @class ContentManagementService
 * @module ContentManagementService
 */
@Injectable({
  providedIn: 'root'
})
export class ContentManagementService {

  /**
   * @description Instance of "environment", the environment variable (JSON) for make calls to REST API
   *
   * @private
   * @memberof ContentManagementService
  */
  private env = environment;

  /**
   * @description Creates an instance of de ContentManagementService.
   * @param {HttpClient} httpCaller
   * @memberof ContentManagementService
  */
  constructor(private httpCaller: HttpClient) {}

  /**
   *
   *
   * @param {string} method Path for the method to find inside the JSON "environment" comma-separated for successful obtaining of the right api method.
   * @param {object} [body=null] JSON with properties to send to the previously stablished endpoint everytime it's needed. Otherwise it's null.
   * @param {string} http_method Method to be called (GET, POST, ..., etc.), in this case these are stored into the JSON environmen variable.
   * @param {string} [slug=null] Slug in case of need it. E.g.: [api/url]/content/{slug: simple-content}.
   * @param {boolean} [is_public=true] Flag that points if the public api url is gonna be used or otherwise the private one.
   * @returns {HttpClient} httpCaller This method returns the entire body of a response of the api method called.
   * @memberof ContentManagementService
  */
  call(method: string, body: object = null, http_method:string, slug: string = null, is_public: boolean = true){
    method = this.findObjPath(method);
    if(method !== undefined && method !== ''){
      let url = this.env.urls[is_public? 'public' : 'private'] + method + (slug != null? slug : '');
      let headrs = new HttpHeaders(this.env.headers);
      if(body == null){
        return this.httpCaller[this.env.http_methods[http_method].toLowerCase()](url, {'headers' :headrs });
      }else{
        if(url.indexOf('content') != -1 && this.env.http_methods[http_method].toLowerCase() == 'post'){
          url = url.substring(0, (url.length -1) );
        }
        return this.httpCaller[this.env.http_methods[http_method].toLowerCase()](url, body, {'headers' :headrs });
      }
    }
  }

  /**
   * @description Obtiene el valor del método a llamar de la variable del entorno.
   * @param {string} path Path point-separated for deep values in the JSON environment. E.g.:  
   * @returns {*|any} pathValue String value that corresponds to the available endpoint in the JSON environment.
   * @memberof ContentManagementService
  */
  findObjPath(path: string){
    let pathValue:any = undefined;
    path.split('.').filter( (a, b)=>{
      if( b == 0 && this.env.methods[a] != undefined ){
        pathValue = this.env.methods[a];
      }else{
        if( pathValue[a] != undefined ){
          pathValue = pathValue[a];
        }
      }
    });
    return pathValue;
  }
}
