import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private product: Product;
  constructor(private route: ActivatedRoute) {
    this.product = new Product();
    this.product.name = 'Shoeees';
    this.product.startPrice = 100;
    this.product.pictures = new Array<string>();
    this.product.pictures.push('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Black_Converse_sneakers.JPG/1200px-Black_Converse_sneakers.JPG');
    this.route.queryParams.subscribe(params => {
      if (params) {
        console.log(params.category);
      } else {
        console.log('No params...');
      }
    }, error => {
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
