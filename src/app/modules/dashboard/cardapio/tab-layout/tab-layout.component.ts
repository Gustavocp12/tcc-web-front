import { Component } from '@angular/core';
import {CardapioService} from "../../../../services/cardapio.service";
import {Cardapio, optionsSelect} from "../../../../core/interfaces/cardapio";

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent {

  Cardapio = {} as Cardapio;
  OptionsSelect: optionsSelect[] = [
    {value: '#083EC4', viewValue: 'Azul'},
    {value: '#27C408', viewValue: 'Verde'},
    {value: '#C40808', viewValue: 'Vermelho'}
  ];

  constructor(private cardapioService: CardapioService) {}

  onFileSelected(event: any){
    this.Cardapio.banner = event.target.files[0];
  }

  postCardapio(){
    const formData = new FormData();
    formData.append('files', this.Cardapio.banner);
    formData.append('corTema', this.Cardapio.corTema);
    formData.append('corNav', this.Cardapio.corNav);
    this.cardapioService.postCardapio(formData);
  }

}
