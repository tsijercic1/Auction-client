import {Bid} from './bid.model';


export class Product {
  public id;
  public name;
  public description;
  public startPrice;
  public auctionStart;
  public auctionEnd;
  public pictures: Array<string>;
  public bids: Array<Bid>;


  constructor(id, name, description, startPrice, auctionStart, auctionEnd, pictures: Array<string>, bids: Array<Bid>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startPrice = startPrice;
    this.auctionStart = auctionStart;
    this.auctionEnd = auctionEnd;
    this.pictures = pictures;
    this.bids = bids;
  }

  public getMainPicture() {
    if (this.pictures.length > 0) {
      return this.pictures[0];
    }
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAACWCAMAAAC/8CD2AAAAA1BMVEXr6+uInxNMAAAAR0lEQVR4nO3BAQEAAACCIP+' +
      'vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8GxXYAARizDlgAAAAASUVORK5CYII=';
  }
}
