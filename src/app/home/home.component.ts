

import { TravelsService } from './../_services/travels.service';
import { AlertService } from './../_services/alert.service';
import { User } from './../_model/user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user : User = new User();
  private page = 1

  constructor(
    private travelsService: TravelsService,
    private alertService: AlertService
  ) {

   }

  ngOnInit() {
    this.user = JSON.parse(localStorage.urTrackerUser);
    this.travelsService.get(this.user.api_token, this.page).subscribe(
      data => {
            if(data.success) {
              this.user.travels = data.data.data; //lol
            }
            else {
              this.alertService.error(data.errors[0]);
            }
          },
          error => {
          }
    );
  }

}
