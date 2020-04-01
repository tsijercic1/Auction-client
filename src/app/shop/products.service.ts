import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import environment from '../../environments/environment';
import {Router} from '@angular/router';
import {SingleProductResponse} from './single-product/single-product.model';

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
  auctionStart:number;
  auctionEnd:number;
  pictures: Array<string>;
}

export interface SingleProductResponseInterface {
  product: SingleProductItemInterface;
  bids: Array<SingleBidItemInterface>;
}

export interface SingleBidItemInterface {
  name: string;
  url: string;
  bidDate: number;
  amount: number;
}

export interface SingleProductItemInterface {
  id: number;
  name: string;
  startPrice: number;
  highestBid: number;
  auctionEnd: number;
  description: string;
  pictures: Array<SinglePictureInterface>;
}

export interface SinglePictureInterface {
  url: string;
}

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor(private http: HttpClient, private router: Router) {

  }

  public getProduct(id: number) {
    return this.http.get<ProductResponseData>(environment.apiUrl + '/products/' + id);
  }

  public getProducts() {
    return this.http.get<Array<ProductResponseData>>(environment.apiUrl + '/products');
  }

  public getSingleProduct(id: number) {
    return this.http.get<SingleProductResponse>(environment.apiUrl + '/products/' + id);
  }
}


