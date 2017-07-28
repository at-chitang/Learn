import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// import { GetMember } from './AngularFirst/getmem.component';
// import { ListMember } from './AngularFirst/listmem.component';
import { ListTeam } from './Directive/directive.component';
import { EmptyData } from './Directive/empty-data.directive';

@NgModule({
  declarations: [
    AppComponent,
    // GetMember,
    // ListMember,
    ListTeam,
    EmptyData

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
