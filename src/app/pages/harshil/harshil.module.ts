import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarshilPageRoutingModule } from './harshil-routing.module';

import { HarshilPage } from './harshil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarshilPageRoutingModule
  ],
  declarations: [HarshilPage]
})
export class HarshilPageModule {}
