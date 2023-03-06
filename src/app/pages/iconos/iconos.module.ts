import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconosPageRoutingModule } from './iconos-routing.module';

import { IconosPage } from './iconos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IconosPage]
})
export class IconosPageModule {}
