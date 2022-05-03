import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';


@Component({
  selector: 'app-requirments-form',
  templateUrl: './requirments-form.component.html',
  styleUrls: ['./requirments-form.component.css']
})
export class RequirmentsFormComponent implements OnInit {
  requirementForm: FormGroup;

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

  }

  onSubmit(){
    console.log(this.requirementForm.value);
    // console.log(this.requirementForm);
    if(this.requirementForm.status == 'VALID'){
      this._data.addProjReq(this.requirementForm.value);
      this.closeForm();
      this._interaction.toggleVisible(false);
      this._snackBar.open("Item is added successfully!", "close",{
        duration: 2000,
      });
    }
  }

  closeForm(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
