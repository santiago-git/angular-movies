import { Component, OnInit } from '@angular/core';
import { Auth, User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  auth: Auth;
  user: User;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('auth')) {
      this.auth = JSON.parse(localStorage.getItem('auth'));
      this.user = this.auth.user;
    }
  }

  logout() {
    console.log("logout");
    this.auth = null;
    this.user = null;
    localStorage.removeItem('auth');
  }

}
