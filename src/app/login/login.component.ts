import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    var self = this;
    self.loading = true;
    self.authenticationService.login(this.model.email, this.model.password)
                .subscribe(
                    data => {
                        if(data.success) {
                          //Redirección
                          self.model.email = "SUCCESS";
                        }
                        else {
                          self.model.email = "MIERDA";
                        }
                    },
                    error => {

                        this.loading = false;
                    });
  }

}
