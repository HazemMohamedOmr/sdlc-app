import { DesginPhaseImgViewComponent } from './pages/all-files/desgin-phase-img-view/desgin-phase-img-view.component';
import { ReqPhaseImgViewComponent } from './pages/all-files/req-phase-img-view/req-phase-img-view.component';
import { UpdateDesginFormComponent } from './pages/sdlc/update-desgin-form/update-desgin-form.component';
import { DesginViewComponent } from './pages/sdlc/desgin-view/desgin-view.component';
import { DesignFormComponent } from './pages/sdlc/design-form/design-form.component';
import { UpdateRequirmentsFormComponent } from './pages/sdlc/update-requirments-form/update-requirments-form.component';
import { RequiremetViewComponent } from './pages/sdlc/requiremet-view/requiremet-view.component';
import { RequirmentsFormComponent } from './pages/sdlc/requirments-form/requirments-form.component';
import { UpdateProjectInitFormComponent } from './pages/sdlc/update-project-init-form/update-project-init-form.component';
import { ProjectInitViewComponent } from './pages/sdlc/project-init-view/project-init-view.component';
import { ProjectInitFormComponent } from './pages/sdlc/project-init-form/project-init-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFilesComponent } from './pages/all-files/all-files.component';
import { SdlcComponent } from './pages/sdlc/sdlc.component';

const routes: Routes = [
  {path: '', redirectTo: 'sdlc', pathMatch: 'full'},
  {path: 'sdlc', component: SdlcComponent,
    children:[
      {path: 'project-Init-form', component: ProjectInitFormComponent},
      {path: 'project-Init-view', component: ProjectInitViewComponent},
      {path: 'project-Init-edit', component: UpdateProjectInitFormComponent},
      {path: 'requirement-form', component: RequirmentsFormComponent},
      {path: 'requirement-view', component: RequiremetViewComponent},
      {path: 'requirement-edit', component: UpdateRequirmentsFormComponent},
      {path: 'design-form', component: DesignFormComponent},
      {path: 'design-view', component: DesginViewComponent},
      {path: 'design-edit', component: UpdateDesginFormComponent}
    ]},
  {path: 'allFiles', component: AllFilesComponent,
    children:[
      {path: 'all-files-requirement', component: ReqPhaseImgViewComponent},
      {path: 'all-files-design', component: DesginPhaseImgViewComponent}
    ]},
  {path: '**', redirectTo: 'sdlc'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
