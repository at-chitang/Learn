import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { GetMember } from './getmem.component';
import { ListMember } from './listmem.component';

@NgModule({
  declarations: [
    AppComponent,
    GetMember,
    ListMember

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
