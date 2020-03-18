import {Bid} from './bid.model';
import {ProductResponseData} from './shop/products.service';


export class Product {
  public id;
  public name;
  public description;
  public startPrice;
  public auctionStart;
  public auctionEnd;
  public pictures: Array<string>;
  public bids: Array<Bid>;


  constructor(product: ProductResponseData) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.startPrice = product.startPrice;
    this.auctionStart = product.auctionStart;
    this.auctionEnd = product.auctionEnd;
    this.pictures = product.pictures.map(picture => picture);
    this.bids = new Array<Bid>();
  }


  public getMainPicture() {
    if (this.pictures.length > 0) {
      return this.pictures[0];
    }
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAACWCAMAAAC/8CD2AAAAA1BMVEXr6+uInxNMAAAAR0lEQVR4nO3BAQEAAACCIP+' +
      'vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8GxXYAARizDlgAAAAASUVORK5CYII=';
  }
}
