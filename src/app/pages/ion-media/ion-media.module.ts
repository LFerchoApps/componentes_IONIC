import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonMediaPageRoutingModule } from './ion-media-routing.module';

import { IonMediaPage } from './ion-media.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonMediaPageRoutingModule
  ],
  declarations: [IonMediaPage]
})
export class IonMediaPageModule {}
