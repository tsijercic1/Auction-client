import { Component, OnInit } from '@angular/core';
import {Product} from '../../product.model';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  public product: Product;
  public highestBid;

  constructor(private productsService: ProductsService, private router: Router) {
    this.product = new Product();
    this.product.name = 'Nike magista';
    this.product.startPrice = 240.00;
    this.highestBid = 260.0;
    console.log(this.router.routerState.snapshot.url);
  }

  ngOnInit() {
  }

}
