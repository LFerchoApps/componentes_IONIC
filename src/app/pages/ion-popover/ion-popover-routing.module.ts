import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonPopoverPage } from './ion-popover.page';

const routes: Routes = [
  {
    path: '',
    component: IonPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonPopoverPageRoutingModule {}
