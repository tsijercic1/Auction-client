import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss']
})
export class FeatureProductComponent implements OnInit {
  @Input('product')
  public product: Product;

  constructor() { }

  ngOnInit() {
  }

}
