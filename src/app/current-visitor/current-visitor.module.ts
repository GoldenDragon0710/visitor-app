import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentVisitorPageRoutingModule } from './current-visitor-routing.module';

import { CurrentVisitorPage } from './current-visitor.page';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavbarModule } from '../components/navbar/navbar.component.module';
import { HeaderModule } from '../components/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentVisitorPageRoutingModule,
    NavbarModule,
    HeaderModule,
  ],
  declarations: [CurrentVisitorPage],
  providers: [BarcodeScanner],
})
export class CurrentVisitorPageModule {}
