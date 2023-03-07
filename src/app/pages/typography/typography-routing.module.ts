import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypographyPage } from './typography.page';

const routes: Routes = [
  {
    path: '',
    component: TypographyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypographyPageRoutingModule {}
