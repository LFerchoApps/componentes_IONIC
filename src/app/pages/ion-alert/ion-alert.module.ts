import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonAlertPageRoutingModule } from './ion-alert-routing.module';

import { IonAlertPage } from './ion-alert.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonAlertPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonAlertPage]
})
export class IonAlertPageModule {}
