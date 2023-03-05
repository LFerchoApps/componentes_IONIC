import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonCardContentPage } from './ion-card-content.page';

const routes: Routes = [
  {
    path: '',
    component: IonCardContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonCardContentPageRoutingModule {}
