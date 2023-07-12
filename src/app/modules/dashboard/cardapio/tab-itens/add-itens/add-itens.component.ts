import { Component } from '@angular/core';

@Component({
  selector: 'app-add-itens',
  templateUrl: './add-itens.component.html',
  styleUrls: ['./add-itens.component.scss']
})
export class AddItensComponent {

  visibleTabItens = false;

  returnTabItens(){
    this.visibleTabItens = true;
  }

}
