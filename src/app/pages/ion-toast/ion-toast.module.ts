import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonToastPageRoutingModule } from './ion-toast-routing.module';

import { IonToastPage } from './ion-toast.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonToastPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonToastPage]
})
export class IonToastPageModule {}
