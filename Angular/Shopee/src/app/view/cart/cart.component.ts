import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart/cart.service';
import { GetProductService } from '../../service/get-product/get-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart_list: any;
  product_list: Array<any> = [];

  constructor(private _cartservice: CartService, private _productservice: GetProductService) { }

  ngOnInit() {
    this.cart_list = this._cartservice.getCart();
    for (var i = 0; i < this.cart_list.length; i++) {
      this.product_list[i] = {"product": this._productservice.getDetail( this.cart_list[i].id ), "quantity": this.cart_list[i].quantity};
    }
    console.log(this.product_list);
  }

  totalPrice(): number {
    var total: number= 0;
    for (var i = 0; i < this.product_list.length; i++) {
      total+= this.product_list[i].product.price*this.product_list[i].quantity;
    }
    return total;
  }

}
