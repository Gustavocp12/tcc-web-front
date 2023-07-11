import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { Login } from "../../core/interfaces/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  Login = {} as Login;

  constructor(private authService: AuthService) {}

  login(){
    this.authService.login(this.Login.usuario, this.Login.senha);
  }
}
