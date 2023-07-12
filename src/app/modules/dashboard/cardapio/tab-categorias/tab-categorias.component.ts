import {Component, OnInit} from '@angular/core';
import { Categorias } from 'src/app/core/interfaces/categorias';
import {CategoriasService} from "../../../../services/categorias.service";

@Component({
  selector: 'app-tab-categorias',
  templateUrl: './tab-categorias.component.html',
  styleUrls: ['./tab-categorias.component.scss']
})
export class TabCategoriasComponent implements OnInit {

  constructor(private categoriasService: CategoriasService) {
  }

  available = true;
  textAvailable = 'Sim';
  empty = false;
  tableValue = '';
  categorias = {} as Categorias;

  tableOption = [
    { title: 'Foto' },
    { title: 'Nome' },
    { title: 'Descrição' },
    { title: 'Preço' },
    { title: 'Disponível' },
    { title: 'Estoque' }
  ];

  das = [
    { id: 1 },
  ];

  addCategory(){
    const nome: string = 'Nome exemplo';
    this.categoriasService.postCategoria(nome);
  }

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
