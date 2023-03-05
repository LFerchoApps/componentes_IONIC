import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbPage } from './breadcrumb.page';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbPageRoutingModule {}
