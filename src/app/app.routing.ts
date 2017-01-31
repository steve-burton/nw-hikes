import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { OtherComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { HikesListComponent } from './hikes-list/hikes-list.component';


const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path:'message-board',
    component: MessageBoardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: OtherComponent, canActivate: [AuthGuard] },
  { path: 'hikes-list', component: HikesListComponent }


 ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
