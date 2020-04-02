import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  search(event) {
    const params = this.activatedRoute.snapshot.queryParams;
    const search = event.target.value;
    console.log({...params, search});
    this.router.navigate(['/shop'], {queryParams: {...params, search}})
  }
}
