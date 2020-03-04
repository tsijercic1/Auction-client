import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login/login.service';
import environment from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class RegistrationService {
  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {

  }

  register(name: string, surname: string, email: string, password: string) {
    this.http.post(
      environment.apiUrl + '/auth/register',
      {
        name,
        surname,
        email,
        password
      }).subscribe(res => {
      this.router.navigateByUrl('/login');
    }, error => {
      console.log(error);
      alert(error);
    });
  }
}
