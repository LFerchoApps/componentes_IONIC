import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonChipPage } from './ion-chip.page';

const routes: Routes = [
  {
    path: '',
    component: IonChipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonChipPageRoutingModule {}
