import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface LoginResponseData {
  accessToken: string;
  tokenType: string;
}

@Injectable({providedIn: 'root'})
export class LoginService {
  constructor(private http: HttpClient) {

  }
  login(email: string, password: string) {
    return this.http.post<LoginResponseData>(
      'http://localhost:8080/api/auth/login',
      {
        usernameOrEmail: email,
        password
      });
  }
}
