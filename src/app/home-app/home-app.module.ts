import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAppPageRoutingModule } from './home-app-routing.module';

import { HomeAppPage } from './home-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAppPageRoutingModule
  ],
  declarations: [HomeAppPage]
})
export class HomeAppPageModule {}
