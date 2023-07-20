import { Component } from '@angular/core';
import {ItensService} from "../../../../../services/itens.service";
import {Itens} from "../../../../../core/interfaces/itens";

@Component({
  selector: 'app-add-itens',
  templateUrl: './add-itens.component.html',
  styleUrls: ['./add-itens.component.scss']
})
export class AddItensComponent {

  constructor(private itensService: ItensService) { }

  visibleTabItens = false;
  itens = {} as Itens;

  returnTabItens(){
    this.visibleTabItens = true;
  }

  onFileSelected(event: any){
    this.itens.foto = event.target.files[0];
  }

  postItem(){
    const formData = new FormData();
    formData.append('nome', this.itens.nome);
    formData.append('files', this.itens.foto);
    formData.append('precoPadrao', this.itens.precoPadrao.toString());
    formData.append('precoPromocional', this.itens.precoPromocional.toString());
    formData.append('descricao', this.itens.descricao);
    formData.append('estoque', this.itens.estoque.toString());

    this.itensService.postItens(formData).subscribe();
  }

}
