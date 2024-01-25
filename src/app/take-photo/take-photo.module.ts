import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakePhotoPageRoutingModule } from './take-photo-routing.module';

import { TakePhotoPage } from './take-photo.page';
import { NavbarModule } from '../components/navbar/navbar.component.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HeaderModule } from '../components/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakePhotoPageRoutingModule,
    NavbarModule,
    HeaderModule,
  ],
  declarations: [TakePhotoPage],
  providers: [BarcodeScanner],
})
export class TakePhotoPageModule {}
