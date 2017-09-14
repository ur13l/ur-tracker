import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';


export const router: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'register-confirmation', component: RegisterConfirmationComponent }
];

export const baseURL = "http://localhost/ur-tracker-backend/public";

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
