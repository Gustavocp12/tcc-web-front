import { Component } from '@angular/core';
import {CardapioService} from "../../../../services/cardapio.service";
import {Cardapio, optionsSelect} from "../../../../core/interfaces/cardapio";

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent {

  imageUrl: string = 'https://via.placeholder.com/800x200';
  Cardapio = {} as Cardapio;
  OptionsSelect: optionsSelect[] = [
    {value: '#083EC4', viewValue: 'Azul'},
    {value: '#27C408', viewValue: 'Verde'},
    {value: '#C40808', viewValue: 'Vermelho'}
  ];

  constructor(private cardapioService: CardapioService) {}

  onFileSelected(event: any){
    this.Cardapio.banner = event.target.files[0];
    if (this.Cardapio.banner) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      }
      reader.readAsDataURL(this.Cardapio.banner);
    }
  }

  removeImage(){
    this.imageUrl = 'https://via.placeholder.com/800x200';
    const fileInput = document.getElementById('image') as HTMLInputElement;
    fileInput.value = '';
  }

  postCardapio(){
    const formData = new FormData();
    formData.append('files', this.Cardapio.banner);
    formData.append('corTema', this.Cardapio.corTema);
    formData.append('corNav', this.Cardapio.corNav);
    this.cardapioService.postCardapio(formData).subscribe();
  }

}
