import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSearchbarPage } from './ion-searchbar.page';

const routes: Routes = [
  {
    path: '',
    component: IonSearchbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSearchbarPageRoutingModule {}
