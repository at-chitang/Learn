import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-member',
  templateUrl: './listmem.component.html',
  styleUrls: ['./app.component.css']
})
export class ListMember {
	@Input() data: any; 

	constructor(){
	}

	


}
