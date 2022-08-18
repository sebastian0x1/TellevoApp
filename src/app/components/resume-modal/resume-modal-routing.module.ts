import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeModalPage } from './resume-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingModalPageRoutingModule {}
