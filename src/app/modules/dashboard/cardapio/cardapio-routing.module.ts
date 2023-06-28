import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardapioComponent} from "./cardapio.component";
import {TabLayoutComponent} from "./tab-layout/tab-layout.component";
import {TabCategoriasComponent} from "./tab-categorias/tab-categorias.component";
import {TabItensComponent} from "./tab-itens/tab-itens.component";

const routes: Routes = [
  { path: '', component: CardapioComponent, children: [
      { path: '', redirectTo: 'layout', pathMatch: 'full' },
      { path: 'layout', component: TabLayoutComponent },
      { path: 'categorias', component: TabCategoriasComponent },
      { path: 'itens', component: TabItensComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardapioRoutingModule { }
