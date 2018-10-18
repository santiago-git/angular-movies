import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = "https://angular-movies-backend.herokuapp.com/";

  constructor(
    private http: HttpClient,
    private messageService: HttpHeaders) { }

  signup(username: string, password: string, email: string): Observable<User> {
    return this.http.post<User>(this.apiURL + 'auth/local/register', {
      'username': username,
      'password': password,
      'email': email
    });
  }
}
