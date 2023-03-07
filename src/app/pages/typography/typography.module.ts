import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypographyPageRoutingModule } from './typography-routing.module';

import { TypographyPage } from './typography.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypographyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TypographyPage]
})
export class TypographyPageModule {}
