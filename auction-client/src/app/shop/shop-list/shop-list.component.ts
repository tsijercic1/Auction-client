import { Component, OnInit } from '@angular/core';
import {Product} from '../../product.model';
import {ProductsService} from '../products.service';
import environment from '../../../environments/environment';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  private products: Array<Product>;

  constructor(private productsService: ProductsService) {
    this.products = new Array<Product>();
    productsService.getProducts().subscribe(products => {
      products.map(product => {
        const result = new Product();
        result.id = product.id;
        result.name = product.name;
        result.description = product.description;
        result.pictures = product.pictures.map(picture => environment.baseUrl + picture);
        result.startPrice = product.startPrice;
        result.auctionStart = product.auctionStart;
        result.auctionEnd = product.auctionEnd;
        console.log(result);
        return result;
      }).forEach(product => this.products.push(product));
    }, error => alert('Server is down. Please come back later'));
  }


  ngOnInit() {
  }

}
