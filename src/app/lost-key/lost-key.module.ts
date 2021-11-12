import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LostKeyPageRoutingModule } from './lost-key-routing.module';

import { LostKeyPage } from './lost-key.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LostKeyPageRoutingModule
  ],
  declarations: [LostKeyPage]
})
export class LostKeyPageModule {}
