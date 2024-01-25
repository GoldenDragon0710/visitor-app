import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private barcodeScanner: BarcodeScanner) {}
  ScannerBtn: boolean = true;
  KeyReturn = false;
  isDivVisible = false;

  ngOnInit() {}

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }

  KeyButton() {
    this.KeyReturn = !this.KeyReturn;
  }

  scanQRCode() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
