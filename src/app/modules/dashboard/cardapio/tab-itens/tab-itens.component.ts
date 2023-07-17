import {Component, OnInit} from '@angular/core';
import {Itens} from "../../../../core/interfaces/itens";
import {ItensService} from "../../../../services/itens.service";

@Component({
  selector: 'app-tab-itens',
  templateUrl: './tab-itens.component.html',
  styleUrls: ['./tab-itens.component.scss']
})
export class TabItensComponent implements OnInit {

  constructor(private itensService: ItensService) { }

  visibleAddItem = false;
  itens: Itens[] = [];

  tableOption = [
    { title: 'Foto' },
    { title: 'Nome' },
    { title: 'Descrição' },
    { title: 'Preço' },
    { title: 'Preço Promocional' },
    { title: 'Estoque' }
  ];

  addItem(){
    this.visibleAddItem = true;
  }

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

  ngOnInit() {
    this.getItens();
  }

}
