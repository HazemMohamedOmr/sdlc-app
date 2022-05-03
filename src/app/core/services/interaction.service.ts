import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  // Phase Nav Component Visibility
  private _phasesNavVisibility = new Subject<boolean>();
  phasesNavVisibility = this._phasesNavVisibility.asObservable();

  constructor() { }

  // Phase Nav Component Visibility
  toggleVisible(vis: boolean){
    this._phasesNavVisibility.next(vis);
  }

}
