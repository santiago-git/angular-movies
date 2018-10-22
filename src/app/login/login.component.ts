import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  login(): void {
    this.userService.login(this.user)
    .subscribe(auth => {
      console.log(auth)
      localStorage.setItem('auth', JSON.stringify(auth));
    })
  }

}
