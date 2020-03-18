import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

interface IBreadCrumb {
  label: string;
  url: string;
}


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Array<IBreadCrumb>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.breadcrumbs = [{label:'SOmething',url:'/home'}];
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    console.log('Ctor');
    console.log(route.snapshot.url);
    this.buildBreadCrumb(route);
  }
  ngOnInit() {
    console.log('start');
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
    )
      .subscribe(
        route => {
          console.log('ngOnInit');
          this.buildBreadCrumb(route);
        }
      );
  }

  buildBreadCrumb(route: ActivatedRoute) {
    console.log(route.snapshot.params);
    console.log(route.snapshot.data);
    const newBreadcrumbs = [];
    if (route.snapshot.data.routeName) {
      console.log(route.snapshot.data.routeName);
      route.snapshot.data.routeName.split('/').forEach(part => {
        newBreadcrumbs.push({
          label: part,
          url: '/home'
        });
      });
    }
    console.log(newBreadcrumbs);
    this.breadcrumbs.push(...newBreadcrumbs);
    this.breadcrumbs = [...this.breadcrumbs];
  }
}
