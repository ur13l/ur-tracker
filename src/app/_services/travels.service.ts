import { baseURL } from './../app.router';
import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TravelsService {

  constructor(private http: Http) { }

  get(apiToken: string, page) {
    return this.http.post(baseURL + '/api/user/travels',
                JSON.stringify({ api_token: apiToken, page: page }))
                    .map((response: Response) => {
                        return response.json();
                    });
  }

}
