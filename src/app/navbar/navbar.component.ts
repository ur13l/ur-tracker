import { Router } from '@angular/router';
import { AuthenticationService } from './../_services/authentication.service';
import { User } from './../_model/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ur-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() 
  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
