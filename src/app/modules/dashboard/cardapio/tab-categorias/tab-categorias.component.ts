import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-categorias',
  templateUrl: './tab-categorias.component.html',
  styleUrls: ['./tab-categorias.component.scss']
})
export class TabCategoriasComponent implements OnInit {

  available = true;
  textAvailable = 'Sim';
  empty = false;
  tableValue = '';

  tableOption = [
    { title: 'Foto' },
    { title: 'Nome' },
    { title: 'Descrição' },
    { title: 'Preço' },
    { title: 'Disponível' },
    { title: 'Estoque' }
  ];

  switchAvailable(){
    this.available = !this.available;
    this.textAvailable = this.available ? 'Sim' : 'Não';
  }

  emptyTable(){
    this.empty = this.tableValue == '';
  }

  ngOnInit() {
    this.emptyTable();
    console.log(this.empty);
  }

}
