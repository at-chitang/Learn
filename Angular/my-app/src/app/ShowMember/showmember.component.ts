import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'member',
  templateUrl: './showmember.component.html',
})
export class ShowMember {
  @Input() data: any; 

  constructor(){
  }

  


}
