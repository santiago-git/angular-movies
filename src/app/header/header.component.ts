import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { UserSet, UserLogout } from '../store/user/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private store: Store<AppState>) {
    store.select('user')
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new UserLogout());
  }

}
