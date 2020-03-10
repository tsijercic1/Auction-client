import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';

@Component({
  selector: 'app-showcase-product',
  templateUrl: './showcase-product.component.html',
  styleUrls: ['./showcase-product.component.scss']
})
export class ShowcaseProductComponent implements OnInit {
  @Input('product')
  public product: Product;



  constructor() {
  }

  ngOnInit() {
  }

}
