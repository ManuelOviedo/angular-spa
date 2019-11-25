import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {


  private footerState = new BehaviorSubject(true);
  currentFooterState = this.footerState.asObservable();

  private headerState = new BehaviorSubject(true);
  currentHeaderState = this.headerState.asObservable();

  private contentState = new BehaviorSubject(true);
  currentContentState = this.contentState.asObservable();

  constructor() { }

  footerChangeStatus(state: any) {
    this.footerState.next(state);
  }

  headerChangeStatus(state: any) {
    this.headerState.next(state);
  }

  contentChangeStatus(state: any) {
    this.contentState.next(state);
  }
  
}
