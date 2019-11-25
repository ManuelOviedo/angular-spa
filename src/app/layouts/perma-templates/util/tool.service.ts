import { Injectable } from '@angular/core';
import { ContentManagementService } from 'src/app/util/services/callers/contentManagement.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/util/services/app/app.service';

/**
 * @description Service that inherits methods from AppService, ContentManagementService, or PluginsService and has own methods for usage inside perma-templates pages.
 * @export {class} ToolsService
 * @class ToolsService
 * @module ToolsService
 */
@Injectable({
  providedIn: 'root'
})
export class ToolService {

  /**
   * @description Property that inherits methods from ContentManagementService for usage inside perma-templates pages.
   *
   * @private
   * @memberof MainToolService
   */
  private contents = new ContentManagementService(this.httpcaller);

  /**
   * @description Service that inherits methods from AppService for usage inside perma-templates pages.
   *
   * @private
   * @memberof MainToolService
   */
  private appSvc = new AppService;

  constructor(
    private httpcaller: HttpClient,
    private router: Router
  ) { }

  // ==============================================
  //     Functions for ContentManagementService
  // ==============================================

  /**
   *
   *
   * @param {string} method
   * @param {object} body
   * @param {string} http_method
   * @param {string} slug
   * @returns
   * @memberof ToolsService
   */
  callService(method: string, body: object = null, http_method: string, slug: string = null, is_public: boolean = true){
    return this.contents.call(method, body, http_method, slug, is_public);
  }

  // ====================================================
  //     End of functions for ContentManagementService
  // ====================================================

  // ========================================
  //       Functions for appService.
  // ========================================

  fadeElement(element: string){ this.appSvc.fadeElement(element); }

  // ========================================
  //       End of functions for appService.
  // ========================================
}
