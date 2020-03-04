import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../product.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('product') product: Product;

  constructor(private router: Router) {}

  ngOnInit() {

  }

  public getPicture() {
    return this.product.getMainPicture();
  }

  public getHeader() {
    return this.product.name;
  }

  public getStartPrice() {
    return this.product.startPrice;
  }

  public goToProduct(id: number) {
    console.log(id);
    // this.router.navigateByUrl('/shop/')
  }
}
