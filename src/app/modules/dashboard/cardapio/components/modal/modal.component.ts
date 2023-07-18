import {Component, Input, OnInit} from '@angular/core';
import {Itens} from "../../../../../core/interfaces/itens";
import {ItensService} from "../../../../../services/itens.service";
import {ItemCategoriaService} from "../../../../../services/item-categoria.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  constructor(private itensService: ItensService, private itemCategoria: ItemCategoriaService) {}

  @Input() idCategoria?: number = 0;
  itens: Itens[] = [];

  tableOption = [
    { title: 'Foto' },
    { title: 'Nome' },
    { title: 'Descrição' },
    { title: 'Preço' },
    { title: 'Preço Promocional' },
    { title: 'Estoque' },
    { title: 'Ação' }
  ];

  getItens(){
    this.itensService.getItens().subscribe(
      (result: any) => {
        this.itens = Array.isArray(result) ? result : [result];
        console.log(this.itens);
        console.log("Itens carregados com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao carregar itens!", error);
      });
  }

  addItem(id: number){
    this.itemCategoria.postItemCategoria(this.idCategoria!, id);
    this.refreshPage();
  }

  closeModal(){
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

  ngOnInit() {
    this.getItens();
  }
}
