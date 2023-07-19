import {Component, Input} from '@angular/core';
import {CategoriasService} from "../../../../../services/categorias.service";

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent {

  constructor(private categoriasService: CategoriasService) {}

  @Input() categoriaId = 0;

  deleteCategory(){
    this.categoriasService.deleteCategoria(this.categoriaId).subscribe()
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }
}
