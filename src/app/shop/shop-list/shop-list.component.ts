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

  private products: Array<Product>;

  constructor(private productsService: ProductsService) {
    this.products = new Array<Product>();
    productsService.getProducts().subscribe(products => {
      products.map(product => {
        const result = new Product(
          product.id,
          product.name,
          product.description,
          product.startPrice,
          product.auctionStart,
          product.auctionEnd,
          product.pictures.map(picture => picture),
          null  );
        return result;
      }).forEach(product => this.products.push(product));
    }, error => alert('Server is down. Please come back later'));
  }


  ngOnInit() {
  }

}
