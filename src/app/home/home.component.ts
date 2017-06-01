import { User } from './../_model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user : User = new User();
  private list : Array<any> = [
    {nombre:"Uno"},
    {nombre:"Dos"},
    {nombre:"Tres"},
    {nombre:"Cuatro"},
    {nombre:"Cinco"},
    {nombre:"Seis"},
    {nombre:"Siete"}
 ]

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.urTrackerUser);
  }

}
