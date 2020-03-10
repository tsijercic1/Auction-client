import {Subcategory} from './subcategory.model';

export class Category {
  constructor(public id, public name: string, public subcategories: Array<Subcategory>) {

  }
}
