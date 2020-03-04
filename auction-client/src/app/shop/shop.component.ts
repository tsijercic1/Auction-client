import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        console.log(params);
      } else {
        console.log('No params...');
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
