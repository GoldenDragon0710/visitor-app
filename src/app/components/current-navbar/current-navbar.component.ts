import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

interface ReturnKeyUserType {
  first_name: string;
  last_name: string;
}

interface ReturnKeyResponse {
  data: ReturnKeyUserType;
  status: boolean;
  message?: string;
}

@Component({
  selector: 'app-current-navbar',
  templateUrl: './current-navbar.component.html',
  styleUrls: ['./current-navbar.component.scss'],
})
export class CurrentNavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner,
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  isDivVisible = false;
  isKeyReturn = false;
  isScanCode = false;
  return_name = '';
  isEvacuateShowModal = false;

  scanCode() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        const data = {
          key_id: barcodeData.text,
        };
        this.http
          .post<ReturnKeyResponse>(
            'http://localhost/index.php/history/keyExpire',
            data
          )
          .subscribe(
            async (response: ReturnKeyResponse) => {
              this.return_name =
                response.data.first_name + response.data.last_name;
              if (response.status) {
                const toast = await this.toastController.create({
                  message: response.message,
                  position: 'top',
                  duration: 2000,
                  cssClass: 'alert-class',
                });
                toast.present();
              } else {
                const toast = await this.toastController.create({
                  message: response.message,
                  position: 'top',
                  duration: 2000,
                  cssClass: 'alert-class',
                });
                toast.present();
              }
              this.isKeyReturn = false;
            },
            async (err) => {
              const toast = await this.toastController.create({
                message: 'Internal Server Error',
                position: 'top',
                duration: 2000,
                cssClass: 'alert-class',
              });
              toast.present();
              this.isKeyReturn = false;
            }
          );
      })
      .catch(async (err) => {
        const toast = await this.toastController.create({
          message: 'Failed Scanning QR code',
          position: 'top',
          duration: 2000,
          cssClass: 'alert-class',
        });
        toast.present();
      });
  }

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }

  closeReturnModal() {
    this.isKeyReturn = false;
  }

  handleHomeTab() {
    this.router.navigate(['/dashboard']);
    this.isScanCode = false;
  }

  handleRollCall() {
    this.router.navigate(['/roll-call']);
    this.isScanCode = false;
  }

  handleReturnKey() {
    this.isScanCode = true;
  }

  handleEvacuate() {
    this.isScanCode = false;
    this.isEvacuateShowModal = true;
  }

  cancelEvacuation() {
    this.isEvacuateShowModal = false;
  }

  okEvacuation() {
    this.isEvacuateShowModal = false;
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {}
}
