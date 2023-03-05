import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRoutingPage } from './ion-routing.page';

const routes: Routes = [
  {
    path: '',
    component: IonRoutingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRoutingPageRoutingModule {}
