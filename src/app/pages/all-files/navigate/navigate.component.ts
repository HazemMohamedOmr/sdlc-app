import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  projectReqData: Array<any> = [];
  projectDesignData: Array<any> = [];

  constructor(private _data: DataService) { }

  ngOnInit(): void {

    this._data.requirements.subscribe(m => {
      this.projectReqData = m;
    });

    this._data.design.subscribe(m => {
      this.projectDesignData = m;
    });
  }

  sendReqData(data: object){
    this._data.sendReqImgData(data);
  }

  sendDesignData(data: object){
    this._data.sendDesignImgData(data);
  }

}
