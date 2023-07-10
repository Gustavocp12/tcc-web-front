import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}

  options = [
    { icon: 'th-large', path: '/dashboard' },
    { icon: 'wrench', path: 'cardapio' },
    { icon: 'shopping-cart', path: 'pedidos' },
    { icon: 'cog', path: 'configuracoes' },
  ];

  logout() {
    this.authService.logout();
  }

}
