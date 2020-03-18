import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import environment from '../../environments/environment';

export interface SubcategoryResponseData {
  id: number;
  name: string;
}

export interface CategoryResponseData {
  id: number;
  name: string;
  subcategories: Array<SubcategoryResponseData>;
}

export interface ProductResponseData {
  id: number;
  name: string;
  description: string;
  category: CategoryResponseData;
  startPrice: number;
  auctionStart;
  auctionEnd;
  pictures: Array<string>;
}

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor(private http: HttpClient) {

  }

  public getProduct(id: number) {
    return this.http.get<ProductResponseData>(environment.apiUrl + '/products/' + id);
  }

  public getProducts() {
    return this.http.get<Array<ProductResponseData>>(environment.apiUrl + '/products');
  }
}
