import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonProgressIndicatorsPage } from './ion-progress-indicators.page';

const routes: Routes = [
  {
    path: '',
    component: IonProgressIndicatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonProgressIndicatorsPageRoutingModule {}
