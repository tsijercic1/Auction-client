import { Component, OnInit } from '@angular/core';
import {Category} from '../shop/category-list/category-item/category.model';
import {Subcategory} from '../shop/category-list/category-item/subcategory.model';
import {CategoryService} from '../category.service';
import {Product} from '../product.model';
import {ProductsService} from '../shop/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categories: Array<Category>;
  public featureCollections: Array<Product>;
  public featureProducts: Array<Product>;
  public newArrivals: Array<Product>;
  public showcaseProduct: Product;
  public selected: Array<string>;

  constructor(private categoryService: CategoryService, private productsService: ProductsService) {
    this.selected = new Array<string>('background-purple', 'background-gray-dark', 'background-gray-dark');
    this.categories = new Array<Category>();
    this.categoryService.getCategories().subscribe(categories => {
      categories.forEach(category => {
        const subcategories = category.subcategories.map(subcategory => new Subcategory(subcategory.id, subcategory.name));
        this.categories.push(new Category(category.id, category.name, subcategories));
      });
    });
    this.featureCollections = new Array<Product>();
    this.featureProducts = new Array<Product>();
    this.newArrivals = new Array<Product>();
    this.showcaseProduct = new Product(
      {id:-1, name:'', description:'',startPrice: 0,auctionStart: 0,
        auctionEnd:0,pictures: new Array<string>(''), category: null}
      );
    this.productsService.getProducts({}).subscribe(products => {
      const collection = this.getRandom(products.slice(), 3);
      const arrivals = this.getRandom(products.slice(), 8);
      products = this.getRandom(products, 4);
      collection.forEach(product => {
          this.featureCollections.push(new Product(product));
        }
        );
      products.forEach(product => {
        this.featureProducts.push(new Product(product));
      });
      arrivals.forEach(product => {
        this.newArrivals.push(new Product(product));
      });
      this.showcaseProduct = this.featureProducts[0];
    });

  }

  ngOnInit() {
  }
  private getRandom(arr, n) {
    const result = new Array(n);
    let len = arr.length;
    const taken = new Array(len);
    if (n > len) {
      return arr;
    }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  select(toSelect: number) {
    this.selected = new Array<string>('background-gray-dark', 'background-gray-dark', 'background-gray-dark');
    this.selected[toSelect] = 'background-purple';
  }
}
