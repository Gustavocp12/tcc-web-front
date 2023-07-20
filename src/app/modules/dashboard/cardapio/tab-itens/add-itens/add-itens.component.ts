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

  imageUrl: string = 'https://via.placeholder.com/350x300';
  visibleTabItens = false;
  itens = {} as Itens;

  returnTabItens(){
    this.visibleTabItens = true;
  }

  onFileSelected(event: any){
    this.itens.foto = event.target.files[0];
    if (this.itens.foto) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      }
      reader.readAsDataURL(this.itens.foto);
    }
  }

  removeImage(){
    this.imageUrl = 'https://via.placeholder.com/350x300';
    const fileInput = document.getElementById('image') as HTMLInputElement;
    fileInput.value = '';
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

    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

}
