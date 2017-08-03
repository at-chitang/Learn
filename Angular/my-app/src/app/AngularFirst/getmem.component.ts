import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListMember } from './listmem.component';

@Component({
  selector: 'get-member',
  templateUrl: './getmem.component.html',
  styleUrls: ['./app.component.css']
})
export class GetMember {
	name: string;
	listMember: any;

	constructor(){
		this.listMember= []
	}
	
	ngOnInit(){
		this.listMember.push("sihc")
	}

	@Output() result: EventEmitter<any> = new EventEmitter();
	addMember(){
		// console.log(this.result.emit( this.name ));
		console.log( this.name );
		console.log(  this.listMember );
		this.listMember.push(this.name);
		this.result.emit( this.name );
	}
}
