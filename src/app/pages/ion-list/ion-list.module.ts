import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonListPageRoutingModule } from './ion-list-routing.module';

import { IonListPage } from './ion-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonListPage]
})
export class IonListPageModule {}
