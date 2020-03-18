import { Component, OnInit } from '@angular/core';
import {Product} from '../../product.model';
import {ProductsService} from '../products.service';
import environment from '../../../environments/environment';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public products: Array<Product>;

  constructor(private productsService: ProductsService) {
    this.products = new Array<Product>();
    productsService.getProducts().subscribe(products => {
      products
        .map(product => new Product(product))
        .forEach(product => this.products.push(product));
    }, error => alert('Server is down. Please come back later'));
  }


  ngOnInit() {
  }

}
