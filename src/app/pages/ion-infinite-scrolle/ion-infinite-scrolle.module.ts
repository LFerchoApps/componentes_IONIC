import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonInfiniteScrollePageRoutingModule } from './ion-infinite-scrolle-routing.module';

import { IonInfiniteScrollePage } from './ion-infinite-scrolle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonInfiniteScrollePageRoutingModule
  ],
  declarations: [IonInfiniteScrollePage]
})
export class IonInfiniteScrollePageModule {}
