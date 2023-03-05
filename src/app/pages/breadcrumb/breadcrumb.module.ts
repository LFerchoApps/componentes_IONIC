import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbPageRoutingModule } from './breadcrumb-routing.module';

import { BreadcrumbPage } from './breadcrumb.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BreadcrumbPage]
})
export class BreadcrumbPageModule {}
