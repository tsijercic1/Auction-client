import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {$} from 'jquery';
import {PopupDialogComponent} from '../popup-dialog/popup-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private dialog: MatDialog) {
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
        const message = 'Bad email or password!';
        const dialogRef = this.dialog.open(PopupDialogComponent, {
          width: '250px',
          data: {message}
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        this.router.navigateByUrl('/login');
      });
    }
  }
}
