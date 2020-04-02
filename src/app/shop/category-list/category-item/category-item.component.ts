import {Component, Input, OnInit} from '@angular/core';
import {Category} from './category.model';
import {Router} from '@angular/router';

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

  constructor(private router:Router) {
    this.clicked = false;
  }

  ngOnInit() {
  }

  public toggle() {
    this.clicked = !this.clicked;
  }

  public onCategoryClick() {
    this.router.navigate(['/shop'],{queryParams:{category:this.category.name}})
  }

  public onSubcategoryClick(subId: number) {
    const subcategories = this.category.subcategories.filter(subcategory => subcategory.id === subId);
    if (subcategories.length !== 0) {
      const sub = subcategories[0];
      this.router.navigate(['/shop'],{queryParams:{category:this.category.name,subcategory:sub.name}})
    }
  }
}
