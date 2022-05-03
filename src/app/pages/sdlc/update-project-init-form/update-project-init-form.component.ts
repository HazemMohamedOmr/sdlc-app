import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-update-project-init-form',
  templateUrl: './update-project-init-form.component.html',
  styleUrls: ['./update-project-init-form.component.css']
})
export class UpdateProjectInitFormComponent implements OnInit {
  projectInit: FormGroup;
  proInitOldData: any = {};
  index: any = {};

  constructor(private fb: FormBuilder, private _interaction: InteractionService, private _data: DataService,
    private _snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) { 
    this.projectInit = this.fb.group({
      projectTitle: ['', Validators.required],
      projectManager: ['', Validators.required],
      date: this.fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      }),
      projectObjectives: ['', Validators.required],
      projectInformation: ['', Validators.required],
      projectScopeStatement: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this._data.projInitUpdateData.subscribe(m =>{
      this.proInitOldData = m[0];
      this.index = m[1];
      console.log(this.proInitOldData);
      console.log(this.index);
      this.updateForm();
      
    })
  }

  updateForm(){
    this.projectInit.patchValue({
      projectTitle: this.proInitOldData.projectTitle,
      projectManager: this.proInitOldData.projectManager,
      date: this.proInitOldData.date,
      projectObjectives: this.proInitOldData.projectObjectives,
      projectInformation: this.proInitOldData.projectInformation,
      projectScopeStatement: this.proInitOldData.projectScopeStatement
    })
  }

  display(){
    this._interaction.toggleVisible(false);
  }

  onSubmit(){
    console.log(this.projectInit.value);
    if(this.projectInit.status == 'VALID'){
      this._data.UpdateProjInitData(this.projectInit.value, this.index.index);
      this.closeForm();
      this._interaction.toggleVisible(false);
      this._snackBar.open("Item is Updated successfully!", "close",{
        duration: 2000,
      });
    }
      
    // console.log(this.projectInit.get('date'));
  }

  closeForm(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
