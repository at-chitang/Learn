import { Component, OnInit, Input } from '@angular/core';
import { appService } from '../Service/app.service'

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../app.component.css']
})
export class Detail {
  @Input() data: any;
  shower: any;

  constructor(private _appservice: appService){
  }

  ngOnChanges(){
    console.log( this.data );
    this.shower = null;
    setTimeout( ()=>{
      this.shower = this._appservice.getDetail( this.data )
    })
  }



}
