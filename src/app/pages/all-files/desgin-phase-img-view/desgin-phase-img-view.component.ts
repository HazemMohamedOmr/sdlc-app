import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-desgin-phase-img-view',
  templateUrl: './desgin-phase-img-view.component.html',
  styleUrls: ['./desgin-phase-img-view.component.css']
})
export class DesginPhaseImgViewComponent implements OnInit {
  designData: any = {};
  imageURL: string = '';

  constructor(private _data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._data.designImgData.subscribe(m =>{
      this.designData = m;
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
    reader.readAsDataURL(this.designData.fileImg.files[0])
  }

  closeView(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
