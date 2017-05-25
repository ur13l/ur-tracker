import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
   }

  login(email: string, password: string) {
          return this.http.post('http://localhost/ur-tracker-backend/public/api/user/login', 
          JSON.stringify({ email: email, password: password }))
              .map((response: Response) => {
                  // login successful if there's a jwt token in the response
                  let user = response.json();
                  if (user && user.success) {
                      // store user details and jwt token in local storage to keep user logged in between page refreshes
                      localStorage.setItem('currentUser', JSON.stringify(user.data));
                  }
              });
      }

      logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
      }
}
