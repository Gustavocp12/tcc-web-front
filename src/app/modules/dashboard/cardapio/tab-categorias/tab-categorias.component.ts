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

  empty = false;
  tableValue = '';
  categorias: Categorias[] = [];
  modal = false;
  dModal = false;
  cModal = false;
  idCategoria = 0;

  tableOption = [
    { title: 'Foto' },
    { title: 'Nome' },
    { title: 'Descrição' },
    { title: 'Preço' },
    { title: 'Disponível' },
    { title: 'Estoque' }
  ];

  modalItens(ID: number){
    this.idCategoria = ID;
    this.modal = !this.modal;
  }

  dataModal(ID: number){
    this.idCategoria = ID;
    this.dModal = !this.dModal;
  }

  confirmModal(){
    this.cModal = !this.cModal;
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

  ngOnInit() {
    this.emptyTable();
    console.log(this.empty);
    this.getCategorias();
  }

}
