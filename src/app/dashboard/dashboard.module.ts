import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { CurrentNavbarModule } from '../components/current-navbar/current-navbar.component.module';
import { CurrentNavbarHeaderModule } from '../components/current-navbar-header/current-navbar-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    CurrentNavbarModule,
    CurrentNavbarHeaderModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
