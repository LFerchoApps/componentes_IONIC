import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonInfiniteScrollePage } from './ion-infinite-scrolle.page';

const routes: Routes = [
  {
    path: '',
    component: IonInfiniteScrollePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonInfiniteScrollePageRoutingModule {}
