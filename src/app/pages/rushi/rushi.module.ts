import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RushiPageRoutingModule } from './rushi-routing.module';

import { RushiPage } from './rushi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RushiPageRoutingModule
  ],
  declarations: [RushiPage]
})
export class RushiPageModule {}
