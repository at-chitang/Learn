import { Injectable } from '@angular/core';  

@Injectable()
export class appService {  
  member = [
    {
      name: 'anh Vi',
      team: 'FE',
      birthday: '01-01-1992',
      avatar: 'http://tophinhanhdep.net/wp-content/uploads/2016/01/avatar-naruto-324x235.jpg'
    },
    {
      name: 'anh Kien',
      team: 'Ruby',
      birthday: '01-01-1999'
    },
    {
      name: 'Tu mo',
      team: 'Ruby'
    }
  ];
  getAll(){ 
   return this.member;
  }
  getDetail(i :number){
    return this.member[i]
  }
}