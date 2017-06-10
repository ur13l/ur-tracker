import { AlertService } from './../_services/alert.service';
import { User } from './../_model/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './../_services/authentication.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User()

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) { }

  /**
   * This code is executed when the component is loaded.
   */
  ngOnInit() {
    //This view is not available if the user is already authenticated.
    this.authenticationService.redirectUserIfAuthenticated(this.router, '/');
  }

  /**
   * Method that calls the registration service in backend through the user service.
   */
  register() {
      //Safety reference self->this
      var self = this;

      //Service that calls the register service in the backend app.
      self.userService.register(this.user)
        .subscribe( //Mapping result.
            data => {
              if(data.success) {
                //The user retrieved by the service is saved in localStorage before redirect 
                localStorage.urTrackerUser = JSON.stringify(data.data);
                this.router.navigate(["/"]);
              }
              else {
                data.errors.forEach(element => {
                  this.alertService.error(element);
                });
              }
            },
            error => {

                this.alertService.error("Error en la conexión con el servidor");
            });
    }
}
