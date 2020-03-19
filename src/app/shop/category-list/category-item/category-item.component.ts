import {Component, Input, OnInit} from '@angular/core';
import {Category} from './category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('category')
  public category: Category;
  public clicked: boolean;

  constructor() {
    this.clicked = false;
  }

  ngOnInit() {
  }

  public toggle() {
    this.clicked = !this.clicked;
  }

  public onCategoryClick() {
  }

  public onSubcategoryClick(subId: number) {
    const subcategories = this.category.subcategories.filter(subcategory => subcategory.id === subId);
    if (subcategories.length !== 0) {
      const sub = subcategories[0];
    }
  }
}
