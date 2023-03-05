import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonTabsPage } from './ion-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: IonTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTabsPageRoutingModule {}
