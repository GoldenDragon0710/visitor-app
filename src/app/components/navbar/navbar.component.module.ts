import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavbarComponent } from './navbar.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [BarcodeScanner],
})
export class NavbarModule {}
