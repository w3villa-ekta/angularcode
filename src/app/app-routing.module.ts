import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { SignInComponent } from './component/user/sign-in/sign-in.component';
import { SignUpComponent } from './component/user/sign-up/sign-up.component';
import { ShowComponent } from './component/user/show/show.component';
import { PhpComponent } from './component/php/php.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'user-show', component: ShowComponent},
  {path: 'php', component: PhpComponent},
  {path: 'change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
