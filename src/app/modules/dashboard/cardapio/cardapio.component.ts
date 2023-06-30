import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent {

  tabs = [
    { id: 1, name: 'Layout', link: 'layout'},
    { id: 2, name: 'Categorias', link: 'categorias' },
    { id: 3, name: 'Itens', link: 'itens' }
  ];

}
