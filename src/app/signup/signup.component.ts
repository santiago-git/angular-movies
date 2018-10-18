import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User, Auth } from '../models/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  loading: Boolean;
  result: String;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = {
      username: '',
      password: '',
      email: ''
    }
    this.loading = false;
  }

  signup(): void {
    if (this.user) {
      this.loading = true;
      this.userService.signup(this.user)
        .subscribe(auth => {
          console.log(auth);
          this.loading = false;
        }, error => {
          this.result = 'No fue posible crear el usuario. Por favor intente más tarde.';
          console.log(error);
        });
      }
  }
}
