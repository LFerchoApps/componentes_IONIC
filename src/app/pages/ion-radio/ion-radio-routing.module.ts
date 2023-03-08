import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRadioPage } from './ion-radio.page';

const routes: Routes = [
  {
    path: '',
    component: IonRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRadioPageRoutingModule {}
