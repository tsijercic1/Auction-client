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
  public showcaseProduct: Product;

  constructor(private categoryService: CategoryService, private productsService: ProductsService) {
    this.categories = new Array<Category>();
    this.categoryService.getCategories().subscribe(categories => {
      categories.forEach(category => {
        const subcategories = category.subcategories.map(subcategory => new Subcategory(subcategory.id, subcategory.name));
        this.categories.push(new Category(category.id, category.name, subcategories));
      });
    });
    this.featureCollections = new Array<Product>();
    this.featureProducts = new Array<Product>();
    this.showcaseProduct = new Product(-1, '', '', 0, 0, 0, new Array<string>(''), null);
    this.productsService.getProducts().subscribe(products => {
      const collection = this.getRandom(products.slice(), 3);
      products = this.getRandom(products, 4);
      collection.forEach(product => {
          this.featureCollections.push(new Product(
            product.id,
            product.name,
            product.description,
            product.startPrice,
            product.auctionStart,
            product.auctionEnd,
            product.pictures.map(picture => picture),
            null)
          );
        }
        );
      products.forEach(product => {
        this.featureProducts.push(new Product(
            product.id,
            product.name,
            product.description,
            product.startPrice,
            product.auctionStart,
            product.auctionEnd,
            product.pictures.map(picture => picture),
            null)
        );
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
      return result;
    }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
}
