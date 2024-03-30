import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RushiPage } from './rushi.page';

const routes: Routes = [
  {
    path: '',
    component: RushiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RushiPageRoutingModule {}
