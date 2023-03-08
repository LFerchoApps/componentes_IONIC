import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonGridPage } from './ion-grid.page';

const routes: Routes = [
  {
    path: '',
    component: IonGridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonGridPageRoutingModule {}
