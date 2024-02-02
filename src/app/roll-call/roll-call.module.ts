import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollCallPageRoutingModule } from './roll-call-routing.module';

import { RollCallPage } from './roll-call.page';
import { CurrentNavbarModule } from '../components/current-navbar/current-navbar.component.module';
import { CurrentNavbarHeaderModule } from '../components/current-navbar-header/current-navbar-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RollCallPageRoutingModule,
    CurrentNavbarModule,
    CurrentNavbarHeaderModule,
  ],
  declarations: [RollCallPage],
})
export class RollCallPageModule {}
