import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(){
    this.authService.login(this.user, this.password);
  }
}
