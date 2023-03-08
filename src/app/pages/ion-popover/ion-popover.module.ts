import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonPopoverPageRoutingModule } from './ion-popover-routing.module';

import { IonPopoverPage } from './ion-popover.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonPopoverPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonPopoverPage]
})
export class IonPopoverPageModule {}
