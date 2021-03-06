import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './_directives/alert.component';
import { ValidateEqualDirective } from './_directives/validate-equal.directive';
import { ValidEmailDirective } from './_directives/valid-email.directive';
import { requestOptionsProvider } from './_services/default-request-options.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

//Router
import { routes } from './app.router';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';

//Services
import { AuthenticationService, AlertService, TravelsService, UserService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    ValidateEqualDirective,
    ValidEmailDirective,
    RegisterConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAaykcWE4yUfhjDFTEKoSukR9VWAc7jIaQ"
    }),
    routes
  ],
  providers: [
    AuthenticationService,
    AlertService,
    TravelsService,
    AuthGuard,
    requestOptionsProvider,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
