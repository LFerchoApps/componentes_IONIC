import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonAccordionPage } from './ion-accordion.page';

const routes: Routes = [
  {
    path: '',
    component: IonAccordionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonAccordionPageRoutingModule {}
