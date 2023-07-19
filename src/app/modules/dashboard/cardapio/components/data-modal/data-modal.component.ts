import {Component, Input} from '@angular/core';
import {CategoriasService} from "../../../../../services/categorias.service";
import {Categorias} from "../../../../../core/interfaces/categorias";

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss']
})
export class DataModalComponent {

  constructor(private categoriasService: CategoriasService) {}

  @Input() idCategoria = 0;
  NomeCategoria = {} as Categorias;

  closeModal(){
    this.refreshPage();
  }

  putCategoryName(){
    console.log(this.idCategoria, this.NomeCategoria.nome);
    this.categoriasService.putCategoriaNome(this.idCategoria, this.NomeCategoria.nome).subscribe();
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

}
