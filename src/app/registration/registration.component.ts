import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';
import {RegistrationService} from './registration.service';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService,  private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit(registrationForm: NgForm) {
    const firstName = registrationForm.value.first_name;
    const lastName = registrationForm.value.last_name;
    const email = registrationForm.value.email;
    const password = registrationForm.value.password;
    this.registrationService.register(firstName, lastName, email, password);
  }
}
