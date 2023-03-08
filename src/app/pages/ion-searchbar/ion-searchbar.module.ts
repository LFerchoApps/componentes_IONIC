import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSearchbarPageRoutingModule } from './ion-searchbar-routing.module';

import { IonSearchbarPage } from './ion-searchbar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSearchbarPageRoutingModule,
    ComponentsModule
    
  ],
  declarations: [IonSearchbarPage]
})
export class IonSearchbarPageModule {}
