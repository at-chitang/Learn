import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// import { GetMember } from './AngularFirst/getmem.component';
// import { ListMember } from './AngularFirst/listmem.component';

// import { ListTeam } from './Directive/directive.component';
import { EmptyData } from './Directive/empty-data.directive';
import { EmptyAvatar } from './Directive/empty-avatar.directive';
import { DefaultImageAvatarDirective } from './Directive/avatar.pipe'

import { List } from './AngularTotal/list-team.component';
import { Detail } from './AngularTotal/detail.component';
import { appService } from './Service/app.service';

@NgModule({
  declarations: [
    AppComponent,
    // GetMember,
    // ListMember,
    // ListTeam,
    DefaultImageAvatarDirective,
    EmptyData,
    EmptyAvatar,
    Detail,
    List

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
