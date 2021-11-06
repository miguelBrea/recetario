import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaMargaritaPage } from './pizza-margarita.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaMargaritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaMargaritaPageRoutingModule {}
