import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconosPage } from './iconos.page';

const routes: Routes = [
  {
    path: '',
    component: IconosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconosPageRoutingModule {}
