import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

/** 
 * @description Services
*/
import { AppService } from './util/services/app/app.service';

/** 
 * @description Environment file/property imported with all constants that could be needed globally.
 * @typedef {Environment} myGlobals var imported from environments.
*/
import * as myGlobals from '../environments/globals';
import { DataFlowService } from './util/services/datastream/data-flow.service';


/**
 * @description Main component (shell) for entire App.
 * @export {class} AppComponent
 * @class AppComponent
 * @module AppComponent
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {

  /**
   * @description Property that flags one third part of the decition if loader should be present on a page.
   * @private
   * @type {Boolean} content_loading Property initialized as true, pointing that the page is loading, should change it's status to false when loading is finished.
   * @memberof AppComponent
  */
  private content_loading:Boolean = true;
  
  /**
   * @description Property that flags one third part of the decition if loader should be present on a page.
   * @private
   * @type {Boolean} header_loading Property initialized as true, pointing that the page header is loading, should change it's status to false when loading is finished.
   * @memberof AppComponent
  */
  private header_loading:Boolean = true;

  /**
   * @description Property that flags one third part of the decition if loader should be present on a page.
   * @private
   * @type {Boolean} footer_loading Property initialized as true, pointing that the page footer is loading, should change it's status to false when loading is finished.
   * @memberof AppComponent
  */
  private footer_loading:Boolean = true;

  /**
   * @description Property that flags if an error occurred.
   * @private
   * @type {Boolean} footer_loading Property initialized as true, pointing that the page footer is loading, should change it's status to false when loading is finished.
   * @memberof AppComponent
  */
  private error:Boolean = false;

  /**
   * @description Creates an instance of AppComponent.
   * @param {Router} router
   * @param {AppService} app
   * @memberof AppComponent
   * @constructor
   */
  constructor(
    private router: Router,
    private app: AppService,
    private data: DataFlowService
  ){}

  /**
   * @description Firts time loader for main shell component
   * @memberof AppComponent
   * @returns {Void} This function does not return any value.
   */
  ngOnInit(){ this.routeListening(); }

  /**
   * @description Route listener a proccessor of performance within navigation.
   * @memberof AppComponent
   * @returns {Void} This function does not return any value.
  */
  routeListening(){
    this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        if(myGlobals.debug_mode){
          console.log('Navigation Start: ', event );
        }
        this.app.setMetas();
        /** @description Reinitialization of loader components */
          this.header_loading = true;
          this.footer_loading = true;
          this.content_loading = true;
          this.error = false;
        /** @description Call to loading subscribers */
          if(event.url.indexOf('error') == -1){
            this.headerSubscription();
            this.footerSubscription();
          }else{
            this.error = true;
          }
          this.contentSubscription();
      }

      if (event instanceof NavigationEnd) {
        // Evaluates
        if(myGlobals.debug_mode){
          console.log('Navigation End: ', event );
        }
      }

      if (event instanceof NavigationError) {
          // Present error to user
          if(myGlobals.debug_mode){
            console.log(event.error);
          }
      }

    });
  }

  /**
   * @description Summoneer that catches all parts of loader (header, footer and content) and fades out the loader screen.
   *
   * @memberof AppComponent
   */
  loaderSummon(){
    if(myGlobals.debug_mode){
      console.log('===============================');
      console.log('header: ', this.header_loading);
      console.log('footer: ', this.footer_loading);
      console.log('content: ', this.content_loading);
    }
    if(this.header_loading === false && this.footer_loading === false && this.content_loading === false){
      this.app.fadeElement('.elLoader');
    }
  }

  /**
   * @description Subscription to the service DataFlowService for keep communication between footer and this shell.
   *
   * @memberof AppComponent
  */
  footerSubscription(){
    this.data.currentFooterState.subscribe(
      (status:any) =>{
        if(myGlobals.debug_mode){
          console.log('==============');
          console.log('from: footer');
        }
        if(status.error != undefined && status.error !== false){
          this.error = true;
          if(status.message != undefined){
            this.router.navigate(['/error', status.error +'-'+ status.message.split(' ').join('-') ]);
          }else{
            this.router.navigate(['/error']);
          }
        }else if(status.error === false){
          this.footer_loading = false;
          this.loaderSummon();
        }
      }
    );
  }

  /**
   * @description Subscription to the service DataFlowService for keep communication between header and this shell.
   *
   * @memberof AppComponent
  */
  headerSubscription(){
    this.data.currentContentState.subscribe(
      (status:any) =>{
        if(myGlobals.debug_mode){
          console.log('==============');
          console.log('from: header');
        }
        if(status.error != undefined && status.error !== false){
          this.error = true;
          if(status.message != undefined){
            this.router.navigate(['/error', status.error +'-'+ status.message.split(' ').join('-') ]);
          }else{
            this.router.navigate(['/error']);
          }
        }else if(status.error === false){
          this.header_loading = false;
          this.loaderSummon();
        }
      }
    );
  }

  /**
   * @description Subscription to the service DataFlowService for keep communication between footer and this shell.
   *
   * @memberof AppComponent
  */
  contentSubscription(){
    this.data.currentContentState.subscribe(
      (status:any) =>{
        if(myGlobals.debug_mode){
          console.log('==============');
          console.log('from: content');
        }
        if(status.error != undefined && status.error !== false){
          if(status.message != undefined){
            this.router.navigate(['/error', status.error +'-'+ status.message.split(' ').join('-') ]);
          }else{
            this.router.navigate(['/error']);
          }
        }else if(status.error === false){
          this.content_loading = false;
          this.loaderSummon();
        }
      }
    );
  }

}
