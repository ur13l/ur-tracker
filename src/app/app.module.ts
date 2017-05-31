import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './_directives/alert.component';
import { requestOptionsProvider } from './_services/default-request-options.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Router
import { routes } from './app.router';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//Services
import { AuthenticationService, AlertService } from './_services/index';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    AuthenticationService,
    AlertService,
    AuthGuard,
    requestOptionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
