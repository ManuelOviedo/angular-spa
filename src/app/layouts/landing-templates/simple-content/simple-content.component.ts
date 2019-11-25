import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFlowService } from 'src/app/util/services/datastream/data-flow.service';
import { ToolService } from '../util/tool.service';

@Component({
  selector: 'app-simple-content',
  templateUrl: './simple-content.component.html',
  styleUrls: ['./simple-content.component.css']
})
export class SimpleContentComponent implements OnInit {

  /**
   * @description Slug passed by route parameter.
   *
   * @private
   * @type {string}
   * @memberof SimpleContentComponent
   */
  private slug: string;

  constructor(
    private route: ActivatedRoute,
    private data: DataFlowService,
    private tool: ToolService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.slug = params.slug;
        if(params.slug == undefined){
          this.tool.navigateToUrl('/home');
        };
        this.data.contentChangeStatus({'error': false});
      },
      (error:any)=>{
        this.data.contentChangeStatus({'error': true, 'message': 'Ha ocurrido un problema con la comunicación, vualva a intentarlo más tarde.'});
      }
    );
  }

}
