import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {
  @Input('product')
  private product: Product;

  constructor() {

  }

  ngOnInit() {
  }

}
