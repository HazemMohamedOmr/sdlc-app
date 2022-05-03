import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-phases-nav',
  templateUrl: './phases-nav.component.html',
  styleUrls: ['./phases-nav.component.css']
})
export class PhasesNavComponent implements OnInit {
  visible:boolean = false;
  selectedValue: string = '';
  SDLCs:Array<any> = [
    {viewValue: "Project Initiation Phase", value: "PI", routing: "project-Init-form"},
    {viewValue: "Requirements Phase", value: "R", routing: "requirement-form"},
    {viewValue: "Design Phase", value: "D", routing: "design-form"},
  ]
  constructor(private _interaction: InteractionService, private router: Router, private ActivatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this._interaction.phasesNavVisibility.subscribe(
      m => {
        this.visible = m;
      }
    )

    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => { 
        let selected = this.ActivatedRoute.firstChild?.snapshot.url.toString();
        switch(selected){
          case 'project-Init-form':
            this.selectedValue = "PI";
            break;
          case 'requirement-form':
            this.selectedValue = "R";
            break;
          case 'design-form':
            this.selectedValue = "D";
            break;
          default:
            this.selectedValue = "";
        }
      })
  }
}
