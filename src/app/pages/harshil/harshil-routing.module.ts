import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarshilPage } from './harshil.page';

const routes: Routes = [
  {
    path: '',
    component: HarshilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarshilPageRoutingModule {}
