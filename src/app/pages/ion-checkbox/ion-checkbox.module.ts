import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonCheckboxPageRoutingModule } from './ion-checkbox-routing.module';

import { IonCheckboxPage } from './ion-checkbox.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonCheckboxPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonCheckboxPage]
})
export class IonCheckboxPageModule {}
