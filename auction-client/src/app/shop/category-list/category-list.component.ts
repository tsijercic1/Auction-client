import { Component, OnInit } from '@angular/core';
import {Category} from './category-item/category.model';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../../category.service';
import {Subcategory} from './category-item/subcategory.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
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
