import { Router } from '@angular/router';
import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {

    this.authenticationService.redirectUserIfAuthenticated(this.router, '/');
  }

}
