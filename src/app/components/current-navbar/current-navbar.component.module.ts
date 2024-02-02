import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentNavbarComponent } from './current-navbar.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [CurrentNavbarComponent],
  exports: [CurrentNavbarComponent],
  providers: [BarcodeScanner],
})
export class CurrentNavbarModule {}
