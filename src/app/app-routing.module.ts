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
    path: 'actions-sheet',
    loadChildren: () => import('./pages/actions-sheet/actions-sheet.module').then( m => m.ActionsSheetPageModule)
  },
  {
    path: 'iconos',
    loadChildren: () => import('./pages/iconos/iconos.module').then( m => m.IconosPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'ion-card-content',
    loadChildren: () => import('./pages/ion-card-content/ion-card-content.module').then( m => m.IonCardContentPageModule)
  },
  {
    path: 'breadcrumb',
    loadChildren: () => import('./pages/breadcrumb/breadcrumb.module').then( m => m.BreadcrumbPageModule)
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
    path: 'ion-alert',
    loadChildren: () => import('./pages/ion-alert/ion-alert.module').then( m => m.IonAlertPageModule)
  },
  {
   path: 'ion-tabs',
   loadChildren: () => import('./pages/ion-tabs/ion-tabs.module').then( m => m.IonTabsPageModule)
  },
  //{
    //path: 'ion-chip',
    //loadChildren: () => import('./pages/ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  //},





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
