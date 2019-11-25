import { Component, OnInit } from '@angular/core';
import { ToolService } from '../util/tool.service';
import { DataFlowService } from 'src/app/util/services/datastream/data-flow.service';
import { ActivatedRoute } from '@angular/router';

/**
 *
 *
 * @export
 * @class IndexComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  /**
   *Creates an instance of IndexComponent.
   * @param {ActivatedRoute} route
   * @param {DataFlowService} data
   * @param {ToolService} tool
   * @memberof IndexComponent
   */
  constructor(
    private route: ActivatedRoute,
    private data: DataFlowService,
    private tool: ToolService,
  ) { }

  /**
   *
   *
   * @memberof IndexComponent
   */
  ngOnInit() {
    this.route.url.subscribe(
      (params: any) => {
        this.data.contentChangeStatus({'error': false});
      },
      (error:any)=>{
        this.data.contentChangeStatus({'error': true, 'message': 'Ha ocurrido un problema con la comunicación, vualva a intentarlo más tarde.'});
      }
    );
  }

}
