import { baseURL } from './../app.router';
import { User } from './../_model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {

   }

   /**
    * Method called in view when the form is submitted.
    */
   register(user: User) {
     return this.http.post(baseURL + '/api/user/register',
            JSON.stringify(user))
                .map((response: Response) => {
                    return response.json();
                });
   }
}
