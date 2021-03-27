import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EditNameComponent } from './edit/edit-name/edit-name.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { EditAttribsComponent } from './edit/edit-attribs/edit-attribs.component';
import { EditPowersComponent } from './edit/edit-powers/edit-powers.component';
import { EditDerivedStatsComponent } from './edit/edit-derived-stats/edit-derived-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    EditNameComponent,
    HeaderComponent,
    EditAttribsComponent,
    EditPowersComponent,
    EditDerivedStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
