import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { SetUser } from '../store/user/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  user: User;

  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  login(): void {
    this.userService.login(this.user)
      .subscribe(auth => {
        this.store.dispatch(new SetUser(auth.user));

        localStorage.setItem('auth', JSON.stringify(auth));
      });
  }

}
