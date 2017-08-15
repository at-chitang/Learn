import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	member: any;

	constructor(){
		this.member= []
	}

	ngOnInit(){
		this.member.push("ok")
	}

	addMember = (e) :void => {
    this.member.push(e);
    console.log("ok");
  }

}
