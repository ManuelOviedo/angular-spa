import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFlowService } from 'src/app/util/services/datastream/data-flow.service';
import { ToolService } from '../util/tool.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private data: DataFlowService,
    private tool: ToolService,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(
      (params: any) => {
        this.data.headerChangeStatus({'error': false});
      },
      (error:any)=>{
        this.data.headerChangeStatus({'error': true, 'message': 'Ha ocurrido un problema con la comunicación, vualva a intentarlo más tarde.'});
      }
    );
  }

}
