import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  login(user: string, password: string) {
    this.http.post('http://localhost:3000/login', { usuario: user, senha: password }).subscribe(
      (response: any) => {
        if(response.user) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        }else{
          console.log(response.message)
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  public httpOptionsMultipart = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };
}
