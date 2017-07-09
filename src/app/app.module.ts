import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import 'rxjs/add/operator/map';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/observable';
import { UserService} from './shared/services/user.service';
import { UserComponent } from './user/user.component';
import{routing} from './app.routing';
import {AuthService } from './shared/services/auth.service';
import 'rxjs/add/operator/do';
import { UserEditComponent } from './user-edit/user-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    UserEditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
