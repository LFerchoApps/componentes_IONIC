import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'actions-sheet',
    loadChildren: () => import('./pages/actions-sheet/actions-sheet.module').then( m => m.ActionsSheetPageModule)
  },  {
    path: 'ion-card-content',
    loadChildren: () => import('./pages/ion-card-content/ion-card-content.module').then( m => m.IonCardContentPageModule)
  },
  {
    path: 'floating',
    loadChildren: () => import('./pages/floating/floating.module').then( m => m.FloatingPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'breadcrumb',
    loadChildren: () => import('./pages/breadcrumb/breadcrumb.module').then( m => m.BreadcrumbPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
