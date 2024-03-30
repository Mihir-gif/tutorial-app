import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MihirPage } from './mihir.page';

const routes: Routes = [
  {
    path: '',
    component: MihirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MihirPageRoutingModule {}
