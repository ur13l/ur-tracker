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
                  return response.json();
              });
      }

      logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
      }
}
