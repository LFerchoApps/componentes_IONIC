import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTabsPageRoutingModule } from './ion-tabs-routing.module';

import { IonTabsPage } from './ion-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTabsPageRoutingModule
  ],
  declarations: [IonTabsPage]
})
export class IonTabsPageModule {}
