import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonCheckboxPage } from './ion-checkbox.page';

const routes: Routes = [
  {
    path: '',
    component: IonCheckboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonCheckboxPageRoutingModule {}
