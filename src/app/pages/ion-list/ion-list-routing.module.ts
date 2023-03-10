import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonListPage } from './ion-list.page';

const routes: Routes = [
  {
    path: '',
    component: IonListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonListPageRoutingModule {}
