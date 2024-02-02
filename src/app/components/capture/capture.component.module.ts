import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaptureComponent } from './capture.component';
import { NavbarModule } from '../navbar/navbar.component.module';
import { HeaderModule } from '../header/header.component.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NavbarModule, HeaderModule],
  declarations: [CaptureComponent],
  exports: [CaptureComponent],
})
export class CaptureModule {}
