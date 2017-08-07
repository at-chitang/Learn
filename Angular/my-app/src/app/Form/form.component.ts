import { Component } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-member',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class GetForm {
  member: FormGroup;
  listmember: Array<any>;
  skill: any;
  team: any;
  accept: false;

  constructor(private formBuilder: FormBuilder){
    this.listmember= [];
  }

  ngOnInit(){
    console.log(this.formBuilder);
    this.member = this.formBuilder.group({
      personal: this.formBuilder.group({
        name: '',
        birthday: '1990-01-01'
      }),
      company: this.formBuilder.group({
        joined: '',
        team: '',
        skill: ''
      })
    });
  }

  addmember(member_form: NgForm){
    this.listmember.push(member_form.value);
    // console.log(member_form.value);
  }

  update(info: any){
    console.log(info);
    // console.log(info.skill);
    // this.team = info.team;
    // this.skill = info.skill;

    if ( info.team == "FE" ) {
      this.accept = info.skill.toLowerCase().includes('html');
    }
    else{
      this.accept = info.skill.toLowerCase().includes(info.team.toLowerCase());
    }
    console.log( this.accept );

    // this.skill == 'Ruby'
  }

  // addmember(member_form: NgForm){
  //   console.log(member_form.value);
  //   this.listmember.push(member_form.value);
  // }
}
