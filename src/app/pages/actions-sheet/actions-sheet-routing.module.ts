import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionsSheetPage } from './actions-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionsSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsSheetPageRoutingModule {}
