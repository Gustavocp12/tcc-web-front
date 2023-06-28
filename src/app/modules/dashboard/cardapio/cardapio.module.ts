import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { CardapioRoutingModule } from './cardapio-routing.module';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { TabCategoriasComponent } from './tab-categorias/tab-categorias.component';
import { TabItensComponent } from './tab-itens/tab-itens.component';


@NgModule({
  declarations: [
    TabLayoutComponent,
    TabCategoriasComponent,
    TabItensComponent
  ],
  exports: [
    TabLayoutComponent,
    TabCategoriasComponent,
    TabItensComponent
  ],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    NgOptimizedImage
  ]
})
export class CardapioModule { }
