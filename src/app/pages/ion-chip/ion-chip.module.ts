import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonChipPageRoutingModule } from './ion-chip-routing.module';

import { IonChipPage } from './ion-chip.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonChipPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonChipPage]
})
export class IonChipPageModule {}
