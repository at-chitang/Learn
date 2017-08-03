import { Injectable } from '@angular/core';  
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class appService {
  // member = [
  //   {
  //     name: 'anh Vi',
  //     team: 'FE',
  //     birthday: '01-01-1992',
  //     avatar: 'http://tophinhanhdep.net/wp-content/uploads/2016/01/avatar-naruto-324x235.jpg'
  //   },
  //   {
  //     name: 'anh Kien',
  //     team: 'Ruby',
  //     birthday: '01-01-1999'
  //   },
  //   {
  //     name: 'Tu mo',
  //     team: 'Ruby'
  //   }
  // ];

  member: any;

  constructor(private http: Http) {
    // var obj;
    // this.getJSON().subscribe(data => obj=data, error => console.log(error));
    // console.log( obj );

    // console.log("ok");

    this.http.get('/assets/listteam.json')
      .map( res => res.json())
      .subscribe(
        data => {
          this.member= data.member_list;
          console.log("ok");
        },
        err =>
          console.log("Can't get ... Code: %s, url %s", err.status, err.url),
        () =>
          console.log("done")
      );
    console.log(this.member);
  }

  getAll(){
    // console.log(typeof this.http.get('/assets/listteam.json').map( res => res.json()) );
    return this.http.get('/assets/listteam.json').map( (res) => res.json());
  }
  getDetail(i :number){
    return this.member[i]
  }
}