import { Component } from '@angular/core';
import {CategoriasService} from "../../../../../services/categorias.service";

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  constructor(private categoriasService: CategoriasService) {}

  addCategory(){
    const nome: string = 'Nova categoria';
    this.categoriasService.postCategoria(nome);
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

}
