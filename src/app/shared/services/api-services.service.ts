import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

@Injectable()
export class ApiServicesService {
  baseUrl='http://jsonplaceholder.typicode.com';
  constructor(private http:Http) {
   }
  getPostList(requestPayload?){
    let relativePath = 'posts';
    let defaultParams = {_start:0,_limit:10};
    return this.http.get(`${this.baseUrl}/${relativePath}`,{params:requestPayload === undefined?defaultParams:requestPayload});
  }

}
