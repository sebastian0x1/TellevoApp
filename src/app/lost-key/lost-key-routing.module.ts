import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostKeyPage } from './lost-key.page';

const routes: Routes = [
  {
    path: '',
    component: LostKeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LostKeyPageRoutingModule {}
