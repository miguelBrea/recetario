import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TartarAtunRecetaComponent } from 'src/app/components/tartar-atun-receta/tartar-atun-receta.component';
import { TartarAtunPage } from './tartar-atun.page';

const routes: Routes = [
  {
    path: '',
    component: TartarAtunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TartarAtunPageRoutingModule {}
