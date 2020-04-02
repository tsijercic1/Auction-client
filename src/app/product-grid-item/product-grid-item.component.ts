import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.scss']
})
export class ProductGridItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('product') product: Product;

  constructor() {}

  ngOnInit() {

  }

  public getPicture() {
    return this.product.getMainPicture();
  }

  public getHeader() {
    return this.product.name;
  }

  public getStartPrice() {
    return this.product.startPrice.toFixed(2);
  }

}
