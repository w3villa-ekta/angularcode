import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { SignInComponent } from './component/user/sign-in/sign-in.component';
import { SignUpComponent } from './component/user/sign-up/sign-up.component';
import { ShowComponent } from './component/user/show/show.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// material design
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatExpansionModule


 } from '@angular/material';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { PhpComponent } from './component/php/php.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SignInComponent,
    SignUpComponent,
    ShowComponent,
    HeaderComponent,
    FooterComponent,
    PhpComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatExpansionModule
    
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
