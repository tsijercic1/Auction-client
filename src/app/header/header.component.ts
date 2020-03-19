import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public breadcrumb: string;
  public breadcrumbs: Array<object>;

  constructor(private router: Router) {
    // this.breadcrumbs = new Array<object>();
    // this.router.events.subscribe(_ => {
    //   this.breadcrumb = this.router.routerState.snapshot.url;
    //   this.initializeBreadcrumbs(this.router.routerState.snapshot.url);
    //   // if (this.breadcrumb.includes('home')) {
    //   //   document.getElementById('breadcrumbs').classList.add('not-present');
    //   // } else {
    //   //   document.getElementById('breadcrumbs').classList.remove('not-present');
    //   // }
    // });
  }

  ngOnInit() {
  }


  initializeBreadcrumbs(url: string) {
    this.breadcrumbs = new Array<object>();
    const length = url.split('/').length;
    url.split('/')
      .map(
        (element, index) => {
          if (index === 0) {
            return '';
          }
          const capitalization = (index + 1 === length) ? 'active text-capitalize' : '';
          const currentPage = (index + 1 === length);
          const link = this.breadcrumb.split('/').reduce((acc, el, i) => {
            if (i <= index) {
              acc += '/' + el;
            }
            return acc;
          });
          const item = (index + 1 === length) ? `${element}` : `<a class="text-capitalize" routerLink="${link}">${element}</a>`;
          return new Object(
            {
              capitalization,
              currentPage,
              element
            }
          );
        }).forEach(element => this.breadcrumbs.push(element));

  }

}
