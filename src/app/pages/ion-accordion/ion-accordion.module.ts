import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonAccordionPageRoutingModule } from './ion-accordion-routing.module';

import { IonAccordionPage } from './ion-accordion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonAccordionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonAccordionPage]
})
export class IonAccordionPageModule {}
