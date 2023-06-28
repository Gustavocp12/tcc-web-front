import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent {

  tabs = [
    { id: 1, name: 'Layout', link: 'layout', active: true },
    { id: 2, name: 'Categorias', link: 'categorias', active: false },
    { id: 3, name: 'Itens', link: 'itens', active: false }
  ];

  activateTab(id: number){
    this.tabs.forEach(tab => {
      tab.active = false;
      tab.active = tab.id === id;
    });
  }

}
