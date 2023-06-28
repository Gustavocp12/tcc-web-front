import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';


@NgModule({
  declarations: [
    PedidosComponent,
    CardapioComponent,
    ConfiguracoesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
