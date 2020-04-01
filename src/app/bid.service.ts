import { Injectable } from '@angular/core';
import {LoginService} from './login/login.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import environment from '../environments/environment';
import {SingleBidItemInterface} from './shop/products.service';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private loginService: LoginService, private httpClient: HttpClient) {
  }

  public placeBid(amount: number, productId: number,onResponse,onError) {
    if (!this.loginService.isLoggedIn) {
      alert('Not logged in!');
    }
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token') });
    const options = { headers };
    return this.httpClient
      .post<Array<SingleBidItemInterface>>(`${environment.apiUrl}/products/${productId}/bids`, {amount}, options)
      .subscribe(onResponse,onError);
  }
}
