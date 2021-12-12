import { Injectable } from '@angular/core';
import { RequestParam } from '../shared/request-param';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private apiService: ApiService) { }
  public getRealTimeDepartures() {
    const params: RequestParam = new RequestParam();
    // Set query params
    params.queryParams = {
        key: 'e5f2da729a3c486a839f8d09e39ba950',
        siteid: '1555',
        timewindow: '60'
    };
    return this.apiService.callApi('getRealTimeDepartures', params, null, null);
}

}
