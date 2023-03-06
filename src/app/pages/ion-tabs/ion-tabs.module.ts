import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTabsPageRoutingModule } from './ion-tabs-routing.module';

import { IonTabsPage } from './ion-tabs.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTabsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonTabsPage]
})
export class IonTabsPageModule {}
