import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'directive',
  templateUrl: './directive.component.html',
})
export class ListTeam {
  member = [
    {
      name: "anh Vi",
      team: "FE",
      birthday: "01-01-1992"
    },
    {
      name: "anh Kien",
      team: "Ruby",
      birthday: "01-01-1999"
    },
    {
      name: "Tu mo",
      team: 'Ruby'
    }
  ];

  shower: any;
  constructor(){}
  showDetail(member :{} = {}){
    this.shower= null;
    setTimeout(()=>{
      this.shower= member;
    })
  }
}
