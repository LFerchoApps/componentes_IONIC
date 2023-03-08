import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRadioPageRoutingModule } from './ion-radio-routing.module';

import { IonRadioPage } from './ion-radio.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRadioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonRadioPage]
})
export class IonRadioPageModule {}
