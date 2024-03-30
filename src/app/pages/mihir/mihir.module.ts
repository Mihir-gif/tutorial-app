import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MihirPageRoutingModule } from './mihir-routing.module';

import { MihirPage } from './mihir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MihirPageRoutingModule
  ],
  declarations: [MihirPage]
})
export class MihirPageModule {}
