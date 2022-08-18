import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUserPageRoutingModule } from './home-user-routing.module';

import { HomeUserPage } from './home-user.page';
import { MenuPageModule } from '../components/menu/menu.module';
import {GoogleMapsModule} from '@angular/google-maps'
import { ModalPageModule } from '../components/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUserPageRoutingModule,
    MenuPageModule,
    GoogleMapsModule,
    ModalPageModule,
  ],
  declarations: [HomeUserPage]
})
export class HomeUserPageModule {}
