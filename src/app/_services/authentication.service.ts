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

    login(email: string, password: string) {
            return this.http.post(baseURL + '/api/user/login',
            JSON.stringify({ email: email, password: password }))
                .map((response: Response) => {
                    return response.json();
                });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('urTrackerUser');
    }

    checkUser(user: User) {
        return this.http.post(baseURL + '/api/user/check',
        JSON.stringify({api_token: user.api_token}))
        .map((response: Response) => {
            return response.json().data;
        });
    }
}
