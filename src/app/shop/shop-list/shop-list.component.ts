import { Component, OnInit } from '@angular/core';
import {Product} from '../../product.model';
import {ProductsService} from '../products.service';
import environment from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public products: Array<Product>;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {
    this.products = new Array<Product>();
    activatedRoute.queryParams.subscribe(next => {
      const subscription = productsService.getProducts(activatedRoute.snapshot.queryParams).subscribe(products => {
        this.products = new Array<Product>();
        products
          .map(product => new Product(product))
          .forEach(product => this.products.push(product));
      }, error => {

      })
    });
  }


  ngOnInit() {
  }

}
