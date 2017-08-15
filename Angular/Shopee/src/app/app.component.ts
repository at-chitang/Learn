import { Component } from '@angular/core';
import { CartService } from './service/cart/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  cart_service: any;
  mountProduct: number= 0;
  cart: any;
  subscription:Subscription;

  constructor(private _cartService:CartService) {}

  ngOnInit() {
    // this.cart_service = this._cartService;
    // console.log( this.cart_service.cartUpdate );
    // this.subscription = this.cart_service.mountProduct.subscribe(cart => this.cart = cart)
    // this.cart_service.getMountOfCart().subscribe(
    //   (cart) => {
    //       this.mountProduct = this._cartService.getCart();
    //       console.log("AppComponent ok");
    //       console.log( this.mountProduct );
    //     },
    //     err =>
    //       console.log("AppComponent can't get ... Code: %s, url %s", err.status, err.url),
    //     () =>
    //       console.log("AppComponent done")
    // )
  }

  getMount() {
    return this._cartService.getMountOfCart();
  }

  // ngOnChange() {
  //   console.log("ahaha");
  // }

  // ngDoCheck() {
  //   this.mountProduct = this.cart_service.getMountOfCart();
  // }
}
