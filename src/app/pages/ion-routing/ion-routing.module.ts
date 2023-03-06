import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRoutingPageRoutingModule } from './ion-routing-routing.module';

import { IonRoutingPage } from './ion-routing.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRoutingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonRoutingPage]
})
export class IonRoutingPageModule {}
