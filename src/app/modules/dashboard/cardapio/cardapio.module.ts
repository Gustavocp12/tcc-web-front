import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { CardapioRoutingModule } from './cardapio-routing.module';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { TabCategoriasComponent } from './tab-categorias/tab-categorias.component';
import { TabItensComponent } from './tab-itens/tab-itens.component';
import { AddItensComponent } from './tab-itens/add-itens/add-itens.component';
import {FormsModule} from "@angular/forms";
import { ModalComponent } from './components/modal/modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { DataModalComponent } from './components/data-modal/data-modal.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { EditItensComponent } from './tab-itens/edit-itens/edit-itens.component';


@NgModule({
  declarations: [
    TabLayoutComponent,
    TabCategoriasComponent,
    TabItensComponent,
    AddItensComponent,
    ModalComponent,
    ConfirmModalComponent,
    DataModalComponent,
    ConfirmDeleteComponent,
    EditItensComponent,
  ],
  exports: [
    TabLayoutComponent,
    TabCategoriasComponent,
    TabItensComponent
  ],
    imports: [
        CommonModule,
        CardapioRoutingModule,
        NgOptimizedImage,
        FormsModule
    ]
})
export class CardapioModule { }
