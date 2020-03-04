import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shocase-product',
  templateUrl: './shocase-product.component.html',
  styleUrls: ['./shocase-product.component.css']
})
export class ShocaseProductComponent implements OnInit {
  public name: string;
  public startPrice: number;
  public description: string;

  constructor() {
    this.name = 'Nike shoes';
    this.description = 'Pretty nice shoes. Really comfy. ' +
      'Definitely for summer or something. Pretty nice shoes. Really comfy. Definitely for summer or something.';
    this.startPrice = 150;
  }

  ngOnInit() {
  }

}
