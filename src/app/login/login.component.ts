import { UrTrackerPage } from './../../../e2e/app.po';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './../_services/alert.service';
import { User } from './../_model/user';
import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = new User();
  loading: boolean = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
  ) {
  }

  /**
   * Code executed when the component is loaded
   */
  ngOnInit() {
    //ReturnURL saves the last url if a redirection to the login view is done.
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    //Executed when the user is already authenticated, if that happens, this view must not be displayed.
    this.authenticationService.redirectUserIfAuthenticated(this.router, this.returnUrl);
    
    
  }

  /**
   * Method that calls de authenticateService's 'login' function to authenticate a user with email and password.
   */
  login() {
    var self = this;
    self.loading = true;
    self.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
          data => {
            this.loading = false;
            if(data.success) {
              //Redirect
              localStorage.urTrackerUser = JSON.stringify(data.data);
              this.router.navigate([this.returnUrl]);
            }
            else {
              data.errors.forEach(element => {
                this.alertService.error(element);
              });
              
            }
          },
          error => {
              this.loading = false;
          });
  }

}
