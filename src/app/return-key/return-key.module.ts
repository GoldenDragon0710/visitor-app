import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnKeyPageRoutingModule } from './return-key-routing.module';

import { ReturnKeyPage } from './return-key.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnKeyPageRoutingModule
  ],
  declarations: [ReturnKeyPage]
})
export class ReturnKeyPageModule {}
