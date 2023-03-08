import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonToastPage } from './ion-toast.page';

const routes: Routes = [
  {
    path: '',
    component: IonToastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonToastPageRoutingModule {}
