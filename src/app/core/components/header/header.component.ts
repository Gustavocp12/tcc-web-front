import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  options = [
    { icon: 'th-large', path: '/dashboard' },
    { icon: 'wrench', path: '/cardapio' },
    { icon: 'shopping-cart', path: '/pedidos' },
    { icon: 'cog', path: '/configuracoes' },
  ]

}
