import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolService } from '../util/tool.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  /**
   *
   *
   * @private
   * @type {string}
   * @memberof InternalComponent
   */
  private status: string;

  /**
   *
   *
   * @private
   * @type {string}
   * @memberof InternalComponent
   */
  private statusText: string;

  /**
   *Creates an instance of InternalComponent.
   * @param {ActivatedRoute} route
   * @memberof InternalComponent
  */
  constructor(
    private route: ActivatedRoute,
    private tool: ToolService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.status = (params.slug != undefined? params.slug.split('-')[0] : '500');
      this.statusText = (params.slug != undefined? params.slug.split('-').splice(1).join(' ') : '500');
      this.tool.fadeElement('.elLoader');
    });
  }

}
