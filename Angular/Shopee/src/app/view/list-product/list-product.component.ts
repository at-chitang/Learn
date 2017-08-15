import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetProductService } from '../../service/get-product/get-product.service';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent{

  product_list: any;
  get_product: any;
  cart_service: any;

  constructor(private _productservice: GetProductService, private _cartservice: CartService) {
    this.get_product = this._productservice.getAll().subscribe(
        (data) => {
          this.product_list= data.products;
          console.log("ListProductComponent ok");
        },
        err =>
          console.log("ListProductComponent can't get ... Code: %s, url %s", err.status, err.url),
        () =>
          console.log("ListProductComponent done")
      )
    this.cart_service = this._cartservice;
  }

  ngOnInit() {
  }

  addProduct(id: number) {
    console.log( id );
    this.cart_service.addProduct( id );
  }

  ngOnDestroy() {
    this.get_product.unsubscribe();
  }
}
