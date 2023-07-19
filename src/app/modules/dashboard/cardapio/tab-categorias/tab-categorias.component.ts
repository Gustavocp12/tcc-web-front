import {Component, OnInit} from '@angular/core';
import { Categorias } from 'src/app/core/interfaces/categorias';
import {CategoriasService} from "../../../../services/categorias.service";
import {Itens} from "../../../../core/interfaces/itens";
import {ItensService} from "../../../../services/itens.service";

@Component({
  selector: 'app-tab-categorias',
  templateUrl: './tab-categorias.component.html',
  styleUrls: ['./tab-categorias.component.scss']
})
export class TabCategoriasComponent implements OnInit {

  constructor(private categoriasService: CategoriasService, private itensService: ItensService) { }

  empty = false;
  tableValue = '';
  categorias: Categorias[] = [];
  modal = false;
  dModal = false;
  cModal = false;
  cdModal = false;
  idCategoria = 0;
  itens: Itens[] = [];
  id = 0;

  tableOption = [
    { title: 'Foto' },
    { title: 'Nome' },
    { title: 'Descrição' },
    { title: 'Preço' },
    { title: 'Disponível' },
    { title: 'Estoque' },
    { title: 'Ações' }
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

  confirmDelete(ID: number){
    this.idCategoria = ID;
    this.cdModal = !this.cdModal;
  }

  emptyTable(){
    this.empty = this.tableValue == '';
  }

  itensCategoria: any[] = [];

  getItensCategoria(idCategoria: number, index: number){
    this.itensService.getItensCategoria(idCategoria).subscribe(
      (result: any) => {
        this.itensCategoria[index] = Array.isArray(result) ? result : [result];
        console.log("Itens carregados com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao carregar itens!", error);
      });
  }

  getCategorias(){
    this.categoriasService.getCategorias().subscribe(
      (result: any) => {
        this.categorias = result;
        for(let i=0; i<this.categorias.length; i++) {
          this.getItensCategoria(this.categorias[i].ID, i);
        }
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
