import { BaseRequestOptions, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultRequestOptionsService extends BaseRequestOptions{

  constructor() {
    super();
     // Set the default 'Content-Type' header
    this.headers.set('Content-Type', 'application/json');
   }

}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptionsService };
