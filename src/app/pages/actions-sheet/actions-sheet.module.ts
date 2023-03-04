import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsSheetPageRoutingModule } from './actions-sheet-routing.module';

import { ActionsSheetPage } from './actions-sheet.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsSheetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActionsSheetPage]
})
export class ActionsSheetPageModule {}
