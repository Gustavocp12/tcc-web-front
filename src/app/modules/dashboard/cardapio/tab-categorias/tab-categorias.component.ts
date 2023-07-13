import {Component, OnInit} from '@angular/core';
import { Categorias } from 'src/app/core/interfaces/categorias';
import {CategoriasService} from "../../../../services/categorias.service";

@Component({
  selector: 'app-tab-categorias',
  templateUrl: './tab-categorias.component.html',
  styleUrls: ['./tab-categorias.component.scss']
})
export class TabCategoriasComponent implements OnInit {

  constructor(private categoriasService: CategoriasService) { }

  available = true;
  textAvailable = 'Sim';
  empty = false;
  tableValue = '';
  categorias: Categorias[] = [];

  tableOption = [
    { title: 'Foto' },
    { title: 'Nome' },
    { title: 'Descrição' },
    { title: 'Preço' },
    { title: 'Disponível' },
    { title: 'Estoque' }
  ];

  addCategory(){
    const nome: string = 'Nome exemplo';
    this.categoriasService.postCategoria(nome);
    this.refreshPage();
  }

  switchAvailable(){
    this.available = !this.available;
    this.textAvailable = this.available ? 'Sim' : 'Não';
  }

  emptyTable(){
    this.empty = this.tableValue == '';
  }

  getCategorias(){
    this.categoriasService.getCategorias().subscribe(
      (result: any) => {
        this.categorias = result;
        console.log("Categorias carregadas com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao carregar categorias!", error);
      });
  }

  refreshPage(){
    window.location.reload();
  }

  ngOnInit() {
    this.emptyTable();
    console.log(this.empty);
    this.getCategorias();
  }

}
