import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-project-init-form',
  templateUrl: './project-init-form.component.html',
  styleUrls: ['./project-init-form.component.css']
})
export class ProjectInitFormComponent implements OnInit {
  projectInit: FormGroup;

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
    
  }

  onSubmit(){
    console.log(this.projectInit.value);
    if(this.projectInit.status == 'VALID'){
      this._data.addProjInit(this.projectInit.value);
      this.closeForm();
      this._interaction.toggleVisible(false);
      this._snackBar.open("Item is added successfully!", "close",{
        duration: 2000,
      });
    }
      
    // console.log(this.projectInit.get('date'));
  }

  closeForm(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
