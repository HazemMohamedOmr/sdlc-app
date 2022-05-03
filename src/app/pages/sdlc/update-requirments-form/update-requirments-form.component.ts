import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-update-requirments-form',
  templateUrl: './update-requirments-form.component.html',
  styleUrls: ['./update-requirments-form.component.css']
})
export class UpdateRequirmentsFormComponent implements OnInit {
  requirementForm: FormGroup;
  requirementOldData: any = {};
  index: any = {};

  constructor(private fb: FormBuilder, private _interaction: InteractionService, private _data: DataService,
    private _snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) { 
    this.requirementForm = this.fb.group({
      introduction: ['', Validators.required],
      purpose: ['', Validators.required],
      intendedAudience: ['', Validators.required],
      projectDescription: ['', Validators.required],
      systemFeaturesAndRequirements: ['', Validators.required],
      useCase: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this._data.requirementsUpdateData.subscribe(m =>{
      this.requirementOldData = m[0];
      this.index = m[1];
      this.updateForm();
    })

  }

  updateForm(){
    this.requirementForm.patchValue({
      introduction: this.requirementOldData.introduction,
      purpose: this.requirementOldData.purpose,
      intendedAudience: this.requirementOldData.intendedAudience,
      projectDescription: this.requirementOldData.projectDescription,
      systemFeaturesAndRequirements: this.requirementOldData.systemFeaturesAndRequirements,
      useCase: this.requirementOldData.useCase
    })
  }

  display(){
    this._interaction.toggleVisible(false);
  }

  onSubmit(){
    console.log(this.requirementForm.value);
    // console.log(this.requirementForm);
    if(this.requirementForm.status == 'VALID'){
      this._data.UpdateProjReqData(this.requirementForm.value, this.index.index);
      this.closeForm();
      this._interaction.toggleVisible(false);
      this._snackBar.open("Item is updated successfully!", "close",{
        duration: 2000,
      });
    }
  }

  closeForm(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
