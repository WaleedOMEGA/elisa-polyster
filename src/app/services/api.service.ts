import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RequestParam } from '../shared/request-param';
import { apis } from '../shared/apis';
import { Observable } from 'rxjs';
import { RequestMethods } from '../shared/request-methods';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private $http: HttpClient ) {}

  callApi(serviceName: string, params?: RequestParam, headers?: any, body?: any): Observable<Object>{

    const api = apis[serviceName];

    let finalUrl: string = api.url;
    const requestMethod: string = api.method;
    const queryParams: {} = (params && params.queryParams ? params.queryParams : {});

    if (params && params.parentParams) {
      for (let key in params.parentParams) {
          finalUrl = finalUrl.replace('${' + key + '}', params.parentParams[key]);
      }
  }
    let req = this.getObservable(finalUrl, requestMethod, queryParams, headers, body);
    return req;
  }

  getObservable(url: string, method: string, params?: {}, headers?: {}, body?: any): Observable<Object> {

    let options: any = {
      params,
      headers: new HttpHeaders(headers)
  };

    switch (method) {
    case RequestMethods.GET:
        return this.$http.get(url, options);
    case RequestMethods.POST:
        return this.$http.post(url, body, options);
    case RequestMethods.PUT:
        return this.$http.put(url, body, options);
    case RequestMethods.DELETE:
        return this.$http.delete(url, options);
    default:
        return null;
}
  }
}


