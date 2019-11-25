import { Component, OnInit } from '@angular/core';
import { ToolService } from '../util/tool.service';
import { DataFlowService } from 'src/app/util/services/datastream/data-flow.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private data: DataFlowService,
    private tool: ToolService,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(
      (params: any) => {
        this.data.footerChangeStatus({'error': false});
      },
      (error:any)=>{
        this.data.footerChangeStatus({'error': true, 'message': 'Ha ocurrido un problema con la comunicación, vualva a intentarlo más tarde.'});
      }
    );
  }

}
