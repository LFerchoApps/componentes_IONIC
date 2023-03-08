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
    path: 'ion-radio',
    loadChildren: () => import('./pages/ion-radio/ion-radio.module').then( m => m.IonRadioPageModule)
  },
  {
    path: 'ion-searchbar',
    loadChildren: () => import('./pages/ion-searchbar/ion-searchbar.module').then( m => m.IonSearchbarPageModule)
  },
  {
    path: 'ion-toast',
    loadChildren: () => import('./pages/ion-toast/ion-toast.module').then( m => m.IonToastPageModule)
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
  {
  path: 'refresher',
  loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'toolbar',
    loadChildren: () => import('./pages/toolbar/toolbar.module').then( m => m.ToolbarPageModule)
  },
  {
    path: 'typography',
    loadChildren: () => import('./pages/typography/typography.module').then( m => m.TypographyPageModule)
  },
  {
    path: 'ion-reorder',
    loadChildren: () => import('./pages/ion-reorder/ion-reorder.module').then( m => m.IonReorderPageModule)
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
  //{
    //path: 'ion-routing',
    //loadChildren: () => import('./pages/ion-routing/ion-routing.module').then( m => m.IonRoutingPageModule)
  //},
  
  {
    path: 'ion-chip',
    loadChildren: () => import('./pages/ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  },
  {
    path: 'ion-grid',
    loadChildren: () => import('./pages/ion-grid/ion-grid.module').then( m => m.IonGridPageModule)
  },
  {
    path: 'ion-checkbox',
    loadChildren: () => import('./pages/ion-checkbox/ion-checkbox.module').then( m => m.IonCheckboxPageModule)
  },  {
    path: 'ion-popover',
    loadChildren: () => import('./pages/ion-popover/ion-popover.module').then( m => m.IonPopoverPageModule)
  },

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
