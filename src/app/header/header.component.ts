import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public breadcrumb: string;

  constructor(private router: Router, public loginService: LoginService) {
    this.router.events.subscribe(_ => {
      this.breadcrumb = this.router.routerState.snapshot.url;
      const length = this.breadcrumb.split('/').length;
      document
        .getElementById('breadcrumb')
        .innerHTML
        = this.breadcrumb
        .split('/')
        .map(
          (element, index) => {
            if ( index === 0 ) {
              return '';
            }
            const capitalization = (index + 1 === length) ? 'active text-capitalize' : '';
            const currentPage = (index + 1 === length) ? 'aria-current="page"' : '';
            const link = this.breadcrumb.split('/').reduce((acc, el, i) => {
              if (i <= index) {
                acc += '/' + el;
              }
              return acc;
            });
            const item = (index + 1 === length) ? `${element}` : `<a class="text-capitalize" routerLink="${link}">${element}</a>`;
            return `<li class="breadcrumb-item ${capitalization} " ${currentPage}>
                ${item}
                </li>`;
          }).join('\n');
      if (this.breadcrumb.includes('home')) {
        document.getElementById('breadcrumbs').classList.add('not-present');
      } else {
        document.getElementById('breadcrumbs').classList.remove('not-present');
      }
    });
  }

  ngOnInit() {
  }


  logout() {
    this.loginService.logout();
  }
}
