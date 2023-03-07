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
  },
  {
    path: 'ion-alert',
    loadChildren: () => import('./pages/ion-alert/ion-alert.module').then( m => m.IonAlertPageModule)
  },
  {
    path: 'ion-chip',
    loadChildren: () => import('./pages/ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  },
  {
    path: 'ion-infinite-scrolle',
    loadChildren: () => import('./pages/ion-infinite-scrolle/ion-infinite-scrolle.module').then( m => m.IonInfiniteScrollePageModule)
  },
  {
    path: 'ion-media',
    loadChildren: () => import('./pages/ion-media/ion-media.module').then( m => m.IonMediaPageModule)
  },
  {
    path: 'ion-progress-indicators',
    loadChildren: () => import('./pages/ion-progress-indicators/ion-progress-indicators.module').then( m => m.IonProgressIndicatorsPageModule)
  },
  {
    path: 'ion-routing',
    loadChildren: () => import('./pages/ion-routing/ion-routing.module').then( m => m.IonRoutingPageModule)
  },
  {
    path: 'ion-tabs',
    loadChildren: () => import('./pages/ion-tabs/ion-tabs.module').then( m => m.IonTabsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
