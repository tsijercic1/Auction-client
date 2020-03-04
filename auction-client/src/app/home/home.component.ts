import { Component, OnInit } from '@angular/core';
import {Category} from '../shop/category-list/category-item/category.model';
import {Subcategory} from '../shop/category-list/category-item/subcategory.model';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categories: Array<Category>;

  constructor(private categoryService: CategoryService) {
    this.categories = new Array<Category>();
    this.categoryService.getCategories().subscribe( categories => {
      categories.forEach(category => {
        const subcategories = category.subcategories.map(subcategory => new Subcategory(subcategory.id, subcategory.name));
        this.categories.push(new Category(category.id, category.name, subcategories));
      });
    });
  }

  ngOnInit() {
  }

}
