import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonMediaPageRoutingModule } from './ion-media-routing.module';

import { IonMediaPage } from './ion-media.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonMediaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonMediaPage]
})
export class IonMediaPageModule {}
