import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonGridPageRoutingModule } from './ion-grid-routing.module';

import { IonGridPage } from './ion-grid.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonGridPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonGridPage]
})
export class IonGridPageModule {}
