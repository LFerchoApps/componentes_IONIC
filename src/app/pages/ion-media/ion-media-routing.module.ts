import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonMediaPage } from './ion-media.page';

const routes: Routes = [
  {
    path: '',
    component: IonMediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonMediaPageRoutingModule {}
