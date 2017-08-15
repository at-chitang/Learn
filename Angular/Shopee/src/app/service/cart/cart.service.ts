import { Injectable, EventEmitter } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {
  // private _mountProduct = new BehaviorSubject<number>(0);
  // mountProduct = this._mountProduct.asObservable();

  // cartUpdated: EventEmitter<any> = new EventEmitter();
  cart: any= [];
  mountProduct: number= 0;

  constructor() {
  }

  find(id: number): number{
    for (var i = 0; i < this.cart.length; i++) {
      if ( this.cart[i].id == id )
        return i;
    }
    return -1;
  }

  addProduct(id_product: number) {
    this.mountProduct++;
    if( this.cart.length != 0 )
    {
      let i= this.find(id_product);
      if( i !== -1 )
      {
        this.cart[i].quantity++;
      }
      else
      {
        this.cart.push({ id: id_product, quantity: 1});
      }
    }
    else
    {
      this.cart.push({ id: id_product, quantity: 1});
    }
    console.log( this.cart );
    // this.cartUpdated.emit( this.cart );
  }

  getCart() {
    return this.cart;
  }

  getMountOfCart() {
    return this.mountProduct;
  }
}
