import { Component, OnInit } from '@angular/core';
import {Product} from '../../product.model';
import {ProductsService} from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import environment from '../../../environments/environment';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  public product: Product;
  public currentPicture: string;
  public highestBid;

  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.product = new Product(
      {id:-1, name:'', description:'',startPrice: 0,auctionStart: 0,
        auctionEnd:0,pictures: new Array<string>(''), category: null}
    );
    this.route.params.subscribe(params => {
      productsService.getProduct(params.id).subscribe(product => {
        this.product = new Product(product);
        if (product.pictures.length !== 0) {
          this.currentPicture = this.product.pictures[0];
        } else {
          this.currentPicture = '';
        }
      }, error => {
        this.router.navigateByUrl('/404');
      });
    });
  }

  ngOnInit() {
  }

  setCurrentPicture(event: Event) {
    const element = (event.target as Element);
    this.currentPicture = element.attributes.getNamedItem('src').value;
  }
}
