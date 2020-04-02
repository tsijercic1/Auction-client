import { Injectable } from '@angular/core';
import {LoginService} from './login/login.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import environment from '../environments/environment';
import {SingleBidItemInterface} from './shop/products.service';
import {MatDialog} from '@angular/material/dialog';
import {PopupDialogComponent} from './popup-dialog/popup-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private loginService: LoginService, private httpClient: HttpClient,
              private dialog: MatDialog ) {
  }

  public placeBid(amount: number, productId: number,onResponse,onError) {
    if (!this.loginService.isLoggedIn) {
      const message = 'You need to log in!';
      const dialogRef = this.dialog.open(PopupDialogComponent, {
        width: '250px',
        data: {message}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token') });
      const options = { headers };
      return this.httpClient
        .post<Array<SingleBidItemInterface>>(`${environment.apiUrl}/products/${productId}/bids`, {amount}, options)
        .subscribe(onResponse,onError);
    }
  }
}
