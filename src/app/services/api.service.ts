import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RequestParam } from '../shared/request-param';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private $http: HttpClient ) {}

  getCompleteUrl(params?: RequestParam, headers?: any, body?: any){

  }
}
