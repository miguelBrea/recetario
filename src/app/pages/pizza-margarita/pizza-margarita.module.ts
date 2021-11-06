import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredientesPizzaMargaritaComponent } from 'src/app/components/ingredientes-pizza-margarita/ingredientes-pizza-margarita.component';
import { ElaboracionPizzaMargaritaComponent } from 'src/app/components/elaboracion-pizza-margarita/elaboracion-pizza-margarita.component';
import { IonicModule } from '@ionic/angular';
import { RecetaPizzaMargaritaComponent } from 'src/app/components/receta-pizza-margarita/receta-pizza-margarita.component';
import { PizzaMargaritaPageRoutingModule } from './pizza-margarita-routing.module';
import { PizzaimagenComponent } from 'src/app/components/pizzaimagen/pizzaimagen.component';
import { PizzaMargaritaPage } from './pizza-margarita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaMargaritaPageRoutingModule
  ],
  declarations: [PizzaMargaritaPage,
                 RecetaPizzaMargaritaComponent,
                 PizzaimagenComponent,
                 IngredientesPizzaMargaritaComponent,
                 ElaboracionPizzaMargaritaComponent]
})
export class PizzaMargaritaPageModule {}
