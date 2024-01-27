import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  visitorType: string = '';
  company: string = '';
  mobileNum: string = '';
  personVisiting: string = '';
  isSick: boolean = true;

  constructor(
    private http: HttpClient,
    private barcodeScanner: BarcodeScanner
  ) {}

  onQRcodeChange(code: string) {
    let str = code;
    code.split(';');
    this.firstName = str[0].split(':')[1];
    this.lastName = str[1].split(':')[1];
    this.mobileNum = str[2].split(':')[1];
  }

  scanQRCode() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
        //e.g. barcode: 'firstName:thomas;lastName:wiliam;mobile:123456789;email:thomas@gmail.com'
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  submit() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      company: this.company,
      visitorType: this.visitorType,
      mobileNum: this.mobileNum,
      personVisiting: this.personVisiting,
      isSick: this.isSick,
      keyID: 'qweryuiyowqery',
    };
    this.http.post('http://localhost/index.php/history/create', data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
