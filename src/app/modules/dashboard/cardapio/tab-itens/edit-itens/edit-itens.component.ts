import {Component, Input, OnInit} from '@angular/core';
import {Itens} from "../../../../../core/interfaces/itens";
import {ItensService} from "../../../../../services/itens.service";

@Component({
  selector: 'app-edit-itens',
  templateUrl: './edit-itens.component.html',
  styleUrls: ['./edit-itens.component.scss']
})
export class EditItensComponent implements OnInit{

  constructor(private itensService: ItensService) { }

  @Input() id = 0;
  visibleTabItens = false;
  itens = {} as Itens;
  nameFile = '';
  imageUrl: string = 'https://via.placeholder.com/350x300';

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

  getItem(){
    this.itensService.getItemById(this.id).subscribe(
      (result: any) => {
        this.itens = result;
        this.nameFile = this.itens.foto.toString();
        this.imageUrl = `./assets/photoItens/${this.nameFile}`;
      }
    );
  }

  editItem(){

    if(this.itens.ID_categoria === null){
      this.itens.ID_categoria = 0;
    }

    const formData = new FormData();
    formData.append('id', this.itens.ID.toString());
    formData.append('nome', this.itens.nome);
    formData.append('files', this.itens.foto);
    formData.append('precoPadrao', this.itens.precoPadrao.toString());
    formData.append('precoPromocional', this.itens.precoPromocional.toString());
    formData.append('descricao', this.itens.descricao);
    formData.append('estoque', this.itens.estoque.toString());
    formData.append('idCategoria', this.itens.ID_categoria.toString());
    formData.append('nameFile', this.nameFile);

    this.itensService.putItemPorId(this.id, formData).subscribe();
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

  ngOnInit() {
    this.getItem();
  }

}
