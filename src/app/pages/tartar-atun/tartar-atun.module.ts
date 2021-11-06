import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TartarAtunRecetaComponent } from 'src/app/components/tartar-atun-receta/tartar-atun-receta.component';
import { TartarAtunImagenComponent } from 'src/app/components/tartar-atun-imagen/tartar-atun-imagen.component';
import { TartarAtunIngredientesComponent } from 'src/app/components/tartar-atun-ingredientes/tartar-atun-ingredientes.component';
import { TartarAtunElaboracionComponent } from 'src/app/components/tartar-atun-elaboracion/tartar-atun-elaboracion.component';
import { IonicModule } from '@ionic/angular';

import { TartarAtunPageRoutingModule } from './tartar-atun-routing.module';

import { TartarAtunPage } from './tartar-atun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TartarAtunPageRoutingModule
  ],
  declarations: [TartarAtunPage,
                 TartarAtunRecetaComponent,
                 TartarAtunImagenComponent,
                 TartarAtunIngredientesComponent,
                 TartarAtunElaboracionComponent]
})
export class TartarAtunPageModule {}
