import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingModalPageRoutingModule } from './resume-modal-routing.module';

import { ResumeModalPage } from './resume-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingModalPageRoutingModule
  ],
  declarations: [ResumeModalPage],
  exports: [ResumeModalPage]
})
export class ParkingModalPageModule {}
