import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentVisitorPageRoutingModule } from './current-visitor-routing.module';

import { CurrentVisitorPage } from './current-visitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentVisitorPageRoutingModule,
  ],
  declarations: [CurrentVisitorPage],
})
export class CurrentVisitorPageModule {}
