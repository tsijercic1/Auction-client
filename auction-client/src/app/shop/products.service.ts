import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface SubcategoryResponseData {
  id: number;
  name: string;
}

interface CategoryResponseData {
  id: number;
  name: string;
  subcategories: Array<SubcategoryResponseData>;
}

interface ProductResponseData {
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

  public getProductResponse(id: number) {
    return this.http.get<ProductResponseData>(environment.apiUrl + '/products/' + id);
  }
}
