import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { appService } from '../Service/app.service'

@Component({
  selector: 'list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['../app.component.css']
})
export class List {
  // @Input() data: any;
  member: any;

  constructor(private _appservice: appService){
    this.member = this._appservice.getAll();
  }

  @Output() result: EventEmitter<any> = new EventEmitter();
  showDetail(i){
    console.log(i);
    this.result.emit( i );
  }


}
