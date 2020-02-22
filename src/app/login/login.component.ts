import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    this.loginService.login(email, password).subscribe(resData => {
        console.log(resData);
      },
      error => console.log(error));
    loginForm.reset();
  }
}
