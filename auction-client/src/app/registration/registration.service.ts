import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login/login.service';

interface RegistrationResponseData {
  accessToken: string;
  tokenType: string;
}

@Injectable({providedIn: 'root'})
export class RegistrationService {
  constructor(private http: HttpClient, private loginService: LoginService) {

  }

  register(name: any, surname: any, email: string, password: string) {

  }
}
