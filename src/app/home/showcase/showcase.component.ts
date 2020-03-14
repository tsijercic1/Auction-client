import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shop/category-list/category-item/category.model';
import {Product} from '../../product.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  @Input('categories')
  public categories: Array<Category>;
  @Input('showcaseProduct')
  public showcaseProduct: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
