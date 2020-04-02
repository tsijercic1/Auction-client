export class SingleProductResponse {
  product: SingleProductItem;
  bids: Array<SingleBidItem>;
}

export class SingleBidItem {
  name: string;
  url: string;
  bidDate: number;
  amount: number;
}

export class SingleProductItem {
  id: number;
  name: string;
  startPrice: number;
  highestBid: number;
  auctionEnd: number;
  description: string;
  pictures: Array<SinglePicture>;
}

export class SinglePicture {
  url: string;
}
