import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomsStatusComponent } from './rooms/rooms-status/rooms-status.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    LoginComponent,
    ForgotpasswordComponent,
    NavComponent,
    FooterComponent,
    RoomsListComponent,
    RoomsStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
