import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-itens',
  templateUrl: './tab-itens.component.html',
  styleUrls: ['./tab-itens.component.scss']
})
export class TabItensComponent implements OnInit {

  tableValue = '';
  empty = false;

  tableOption = [
    { title: 'Foto' },
    { title: 'Nome' },
    { title: 'Descrição' },
    { title: 'Preço' },
    { title: 'Disponível' },
    { title: 'Estoque' }
  ];

  emptyTable(){
    this.empty = this.tableValue == '';
  }

  ngOnInit() {
    this.emptyTable();
    console.log(this.empty);
  }

}
