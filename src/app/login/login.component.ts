import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {$} from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  async onSubmit(loginForm: NgForm) {
    const email = loginForm.value.email.trim();
    const password = loginForm.value.password.trim();
    const response = await this.loginService.login(email, password);
    if (response) {
      response.subscribe(userData => {
        loginForm.reset();
        this.router.navigateByUrl('/home');
      }, _ => {
        // alert('Bad credentials');
        this.router.navigateByUrl('/login');
      });
    }
  }
}
