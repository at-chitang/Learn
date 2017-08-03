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
    this._appservice.getAll().subscribe(
        data => {
          this.member= data.member_list;
          console.log("ok");
        },
        err =>
          console.log("Can't get ... Code: %s, url %s", err.status, err.url),
        () =>
          console.log("done")
      );
  }

  @Output() result: EventEmitter<any> = new EventEmitter();
  showDetail(i){
    console.log(i);
    this.result.emit( i );
  }


}
