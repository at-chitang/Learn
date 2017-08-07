import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { GetMember } from './getmem.component';
import { ListMember } from './listmem.component';

import { ReactiveFormsModule } from '@angular/forms';
import { GetForm } from './Form/form.component';
import { ShowMember } from './ShowMember/showmember.component';

@NgModule({
  declarations: [
    AppComponent,
    // GetMember,
    // ListMember
    GetForm,
    ShowMember
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
