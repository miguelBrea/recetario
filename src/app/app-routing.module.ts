import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pizza-margarita',
    loadChildren: () => import('./pages/pizza-margarita/pizza-margarita.module').then( m => m.PizzaMargaritaPageModule)
  },
  {
    path: 'tartar-atun',
    loadChildren: () => import('./pages/tartar-atun/tartar-atun.module').then( m => m.TartarAtunPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
