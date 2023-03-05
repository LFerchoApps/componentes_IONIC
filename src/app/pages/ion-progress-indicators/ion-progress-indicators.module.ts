import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonProgressIndicatorsPageRoutingModule } from './ion-progress-indicators-routing.module';

import { IonProgressIndicatorsPage } from './ion-progress-indicators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonProgressIndicatorsPageRoutingModule
  ],
  declarations: [IonProgressIndicatorsPage]
})
export class IonProgressIndicatorsPageModule {}
