import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavbarModule } from '../components/navbar/navbar.component.module';
import { HeaderModule } from '../components/header/header.component.module';
import { CaptureModule } from '../components/capture/capture.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NavbarModule,
    HeaderModule,
    CaptureModule,
  ],
  declarations: [HomePage],
  providers: [BarcodeScanner],
})
export class HomePageModule {}
