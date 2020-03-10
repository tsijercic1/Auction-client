import {HttpClient} from '@angular/common/http';
import environment from '../environments/environment';
import {Injectable} from '@angular/core';

interface SubcategoryResponseData {
  id: number;
  name: string;
}

interface CategoryResponseData {
  id: number;
  name: string;
  subcategories: Array<SubcategoryResponseData>;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  public getCategories() {
    return this.http.get<Array<CategoryResponseData>>(environment.apiUrl + '/categories');
  }
}
