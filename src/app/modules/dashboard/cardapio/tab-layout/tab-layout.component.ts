import { Component } from '@angular/core';
import {CardapioService} from "../../../../services/cardapio.service";
import { Cardapio } from "../../../../core/interfaces/cardapio";

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent {

  Cardapio = {} as Cardapio;

  constructor(private cardapioService: CardapioService) {}

  onFileSelected(event: any){
    this.Cardapio.banner = event.target.files[0];
    this.Cardapio.corTema = "000000";
    this.Cardapio.corNav = "000000";
  }

  postCardapio(){
    const formData = new FormData();
    formData.append('files', this.Cardapio.banner);
    formData.append('corTema', this.Cardapio.corTema);
    formData.append('corNav', this.Cardapio.corNav);
    this.cardapioService.postCardapio(formData);
  }

}
