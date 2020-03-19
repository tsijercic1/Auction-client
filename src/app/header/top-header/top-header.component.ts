import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
