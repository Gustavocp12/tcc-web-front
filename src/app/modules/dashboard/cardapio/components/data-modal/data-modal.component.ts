import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss']
})
export class DataModalComponent {

  @Input() idCategoria = 0;

  closeModal(){
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

}
