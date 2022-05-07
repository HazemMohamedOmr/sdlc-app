import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Project Initiation Data

  private projectInitiation: Array<object> = []
  private _projInit = new BehaviorSubject<Array<object>>([]);
  projInit = this._projInit.asObservable();

  private _projInitData = new BehaviorSubject<Array<object>>([]);
  projInitData = this._projInitData.asObservable();

  private _projInitUpdateData = new BehaviorSubject<Array<object>>([]);
  projInitUpdateData = this._projInitUpdateData.asObservable();


  // Project Requirements Data

  private projectRequirement: Array<object> = []
  private _requirements = new BehaviorSubject<Array<object>>([]);
  requirements = this._requirements.asObservable();

  private _requirementsData = new BehaviorSubject<Array<object>>([]);
  requirementsData = this._requirementsData.asObservable();

  private _requirementsImgData = new BehaviorSubject<object>({});
  requirementsImgData = this._requirementsImgData.asObservable();

  private _requirementsUpdateData = new BehaviorSubject<Array<object>>([]);
  requirementsUpdateData = this._requirementsUpdateData.asObservable();

  // Project Design Data

  private projectDesign: Array<object> = []
  private _design = new BehaviorSubject<Array<object>>([]);
  design = this._design.asObservable();

  private _designData = new BehaviorSubject<Array<object>>([]); 
  designData = this._designData.asObservable();

  private _designImgData = new BehaviorSubject<object>({}); 
  designImgData = this._designImgData.asObservable();

  private _designUpdateData = new BehaviorSubject<Array<object>>([]);
  designUpdateData = this._designUpdateData.asObservable();

  constructor() { }

  // Sending Data to Display it

  sendProjInitData(data: Array<object>){
    this._projInitData.next(data);
  }

  sendProjReqData(data: Array<object>){
    this._requirementsData.next(data);
  }

  sendProjDesignData(data: Array<object>){
    this._designData.next(data);
  }

  // Sending Data to be ready for update

  sendProjInitUpdateData(data: Array<object>){
    this._projInitUpdateData.next(data);
  }

  sendProjReqUpdateData(data: Array<object>){
    this._requirementsUpdateData.next(data);
  }

  sendProjDesignUpdateData(data: Array<object>){
    this._designUpdateData.next(data);
  }


  // Adding new Data

  addProjInit(data: object){
    this.projectInitiation.push(data);
    this._projInit.next(this.projectInitiation);
  }

  addProjReq(data: object){
    this.projectRequirement.push(data);
    this._requirements.next(this.projectRequirement);
  }

  addProjDesign(data: object){
    this.projectDesign.push(data);
    this._design.next(this.projectDesign);
  }

  // Delete Specific Data

  deleteProjInitData(index: number){
    this.projectInitiation.splice(index, 1);
    this._projInit.next(this.projectInitiation);
  }

  deleteProjReqData(index: number){
    this.projectRequirement.splice(index, 1);
    this._requirements.next(this.projectRequirement);
  }

  deleteProjDesignData(index: number){
    this.projectDesign.splice(index, 1);
    this._design.next(this.projectDesign);
  }

  // Update Specific Data

  UpdateProjInitData(data: object, index: number){
    this.projectInitiation.splice(index, 1, data);
    this._projInit.next(this.projectInitiation);
  }

  UpdateProjReqData(data: object, index: number){
    this.projectRequirement.splice(index, 1, data);
    this._requirements.next(this.projectRequirement);
  }

  UpdateProjDesignData(data: object, index: number){
    this.projectDesign.splice(index, 1, data);
    this._design.next(this.projectDesign);
  }

  // Send data to all-filles views

  sendReqImgData(data: object){
    this._requirementsImgData.next(data);
  }

  sendDesignImgData(data: object){
    this._designImgData.next(data);
  }
}
