import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


interface UserData {
  id: number;
  email: string;
  name: string;
  surname: string;
  token: string;
}

@Injectable({providedIn: 'root'})
export class LoginService {
  private userData: UserData;
  public isLoggedIn: boolean;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token') !== null) {
      this.refresh(localStorage.getItem('token'));
    }
  }

  private refresh(token: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token') });
    const options = { headers };
    this.http.post<UserData>(
      environment.apiUrl + '/auth/refresh',
      {}, options
        ).subscribe(
          responseData => {
            this.isLoggedIn = true;
            console.log(responseData);
          },
        error => {
          this.isLoggedIn = false;
          console.log((error));
        });
  }

  async login(email: string, password: string) {
    const response = await this.http.post<UserData>(
      environment.apiUrl + '/auth/login',
      {
        email,
        password
      });
    response.subscribe(loginResponseData => {
      this.isLoggedIn = true;
      console.log('response on login');
      console.log(loginResponseData);
      localStorage.setItem('token', loginResponseData.token);
    }, error => {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
    });
    return response;
  }

  get getUserData() {
    return this.userData;
  }

  logout() {
    this.isLoggedIn = false;
    this.userData = null;
    localStorage.removeItem('token');
  }
}
