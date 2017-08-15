import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GetProductService } from './service/get-product/get-product.service';
import { CartService } from './service/cart/cart.service';

import { AppComponent } from './app.component';
import { ListProductComponent } from './view/list-product/list-product.component';
import { DetailProductComponent } from './view/detail-product/detail-product.component';
import { CartComponent } from './view/cart/cart.component';

// import { appRoutes } from './app.routes';

const appRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListProductComponent },
  { path: 'detail', component: DetailProductComponent},
  { path: 'cart', component: CartComponent}
]
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    DetailProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    GetProductService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
