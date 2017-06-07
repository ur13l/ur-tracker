import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './_directives/alert.component';
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

//Services
import { AuthenticationService, AlertService, TravelsService } from './_services/index';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent
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
    requestOptionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
