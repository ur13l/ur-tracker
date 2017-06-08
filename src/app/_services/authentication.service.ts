import { Router } from '@angular/router';
import { User } from './../_model/user';
import { baseURL } from './../app.router';
import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
    }

    /**
     * Login method with the AJAX call to return the user in JSON.
     * @param email 
     * @param password 
     */
    login(email: string, password: string) {
            return this.http.post(baseURL + '/api/user/login',
            JSON.stringify({ email: email, password: password }))
                .map((response: Response) => {
                    return response.json();
                });
    }

    /**
     * Logout method
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('urTrackerUser');
    }

    /**
     * Redirects the user to the return URL if authenticated
     * @param router 
     * @param returnUrl 
     */
    redirectUserIfAuthenticated (router: Router, returnUrl?: string) {
        if(localStorage.urTrackerUser) {
      try {
        let user = JSON.parse(localStorage.urTrackerUser);
        this.checkUser(user).subscribe(
          data => {
            if(data) {
              router.navigate([returnUrl]);
            }
          },
          error => {

          }
        );
      } catch (e){
        console.log("Invalid user: " + e);
      }
    }
    }

    /**
     * Check the user's validity by its api_token in the server
     * @param user 
     */
    checkUser(user: User) {
        return this.http.post(baseURL + '/api/user/check',
        JSON.stringify({api_token: user.api_token}))
        .map((response: Response) => {
            return response.json().data;
        });
    }
}
