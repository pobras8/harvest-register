import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CheckinComponent } from './checkin/checkin.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { routing } from './app.routing';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CheckinComponent,
    GuestFormComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
