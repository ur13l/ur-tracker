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

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authenticationService.redirectUserIfAuthenticated(this.router, this.returnUrl);
    
    
  }

  login() {
    var self = this;
    self.loading = true;
    self.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
          data => {
            this.loading = false;
            if(data.success) {
              //Redirección
              localStorage.urTrackerUser = JSON.stringify(data.data);
              this.router.navigate([this.returnUrl]);
            }
            else {
              this.alertService.error(data.errors[0]);
            }
          },
          error => {
              this.loading = false;
          });
  }

}
