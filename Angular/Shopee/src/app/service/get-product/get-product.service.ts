import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetProductService {
  product_list: any;

  GetProduct= () => {
    this.http.get('/assets/products.json')
    .map( res => res.json())
    .subscribe(
      data => {
        this.product_list= data.products;
        console.log("GetProductService ok");
        return data.products;
      },
      err =>
      console.log("GetProductService can't get ... Code: %s, url %s", err.status, err.url),
      () =>
      console.log("GetProductService done")
      );
  }

  constructor(private http: Http) {
    this.product_list || this.GetProduct();
  }

  getAll() {
    // this.product_list || this.GetProduct();
    // return this.GetProduct();
    return this.http.get('/assets/products.json').map( res => res.json());
  }

  getDetail(i: number) {
    return this.product_list[i];
  }
}
