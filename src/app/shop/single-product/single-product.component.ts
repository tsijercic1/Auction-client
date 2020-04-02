import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService, SingleBidItemInterface} from '../products.service';
import {SingleBidItem, SingleProductResponse} from './single-product.model';
import {BidService} from '../../bid.service';
import {PopupDialogComponent} from '../../popup-dialog/popup-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  public product: SingleProductResponse;
  public currentPicture: string;
  displayedColumns: Array<string>;
  options = { year: 'numeric', month: 'long', day: 'numeric' };

  constructor(private productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute,
              private bidService: BidService,
              public dialog: MatDialog) {
    this.displayedColumns = new Array<string>();
    this.displayedColumns.push('bidder', 'date', 'amount');
    this.product = null;
    this.route.params.subscribe(params => {
      productsService.getSingleProduct(params.id).subscribe(productResponse =>{
        this.product = productResponse;
        if (this.product.product.pictures.length !== 0) {
          this.currentPicture = this.product.product.pictures.map(picture => picture.url)[0];
        }
        this.product.bids.sort((a,b)=>{
          if (a.bidDate > b.bidDate) {
            return -1;
          }else if (a.bidDate === b.bidDate) {
            return 0;
          } else {
            return 1;
          }
        }
      )
      },  error => {
        this.router.navigateByUrl('/404');
      });
    });
  }

  ngOnInit() {
  }

  placeBid() {
    const amount = Number((document.getElementById('bidField') as HTMLInputElement).value);
    const onResponse = (response: Array<SingleBidItemInterface>) => {
      this.product.bids = response;
    };
    const onError = (error) => {
      if (error.status === 401) {
        error.error.message = 'You need to log in!';
      }
      const dialogRef = this.dialog.open(PopupDialogComponent, {
        width: '250px',
        data: {message:error.error.message}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

    };
    this.bidService.placeBid(amount, this.product.product.id,onResponse,onError);
  }

  setCurrentPicture(event: Event) {
    const element = (event.target as Element);
    this.currentPicture = element.attributes.getNamedItem('src').value;
  }

  getPictures() {
    return this.product ? this.product.product.pictures.map(picture => picture.url) : '';
  }

  getName() {
    return this.product ? this.product.product.name : '';
  }

  getDescription() {
    return this.product ? this.product.product.description : '';
  }

  getStartPrice() {
    return this.product ? this.product.product.startPrice.toFixed(2) : '';
  }

  getHighestBid() {
    return this.product
      ? this.product.product.highestBid === 0.00
        ? this.getStartPrice()
        : this.product.product.highestBid.toFixed(2)
      : '';
  }

  getNumberOfBids() {
    return this.product !== null ? this.product.bids.length : 0;
  }

  getTimeLeft() {
    if (!this.product) {
      return '';
    }
    let unit = 'seconds';
    console.log(this.product.product.auctionEnd);
    console.log(new Date(this.product.product.auctionEnd).getTime());
    let time = new Date(this.product.product.auctionEnd).getTime();
    time = (time-new Date().getTime())/1000;
    if (time < 0) {
      return 'Closed';
    }
    if (time > 60) {
      unit = 'minutes';
      time = time / 60;
      if (time > 60) {
        unit = 'hours';
        time = time / 60;
      }
      if (time > 24) {
        unit = 'days';
        time = time / 24;
      }
    }
    return time.toFixed(0)+' '+unit;
  }

  getBidDateFromBid(bid: SingleBidItem) {
    return new Date(bid.bidDate).toLocaleDateString('en-US', this.options);
  }
}
