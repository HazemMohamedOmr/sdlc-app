import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-req-phase-img-view',
  templateUrl: './req-phase-img-view.component.html',
  styleUrls: ['./req-phase-img-view.component.css']
})
export class ReqPhaseImgViewComponent implements OnInit {
  reqData: any = {};
  imageURL: string = '';

  constructor(private _data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._data.requirementsImgData.subscribe(m =>{
      this.reqData = m;
      this.display();
    })
  }

  display(){
    this.readImgURL();
  }

  readImgURL(){
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.reqData.useCase.files[0])
  }

  closeView(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
