import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonReorderPageRoutingModule } from './ion-reorder-routing.module';

import { IonReorderPage } from './ion-reorder.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonReorderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonReorderPage]
})
export class IonReorderPageModule {}
