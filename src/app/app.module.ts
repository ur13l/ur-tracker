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
import { AuthenticationService } from './_services/index'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    AuthenticationService,
    requestOptionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
