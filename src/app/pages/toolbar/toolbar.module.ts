import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarPageRoutingModule } from './toolbar-routing.module';

import { ToolbarPage } from './toolbar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToolbarPage]
})
export class ToolbarPageModule {}
