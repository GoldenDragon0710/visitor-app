import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

interface ReturnResponse {
  status: boolean;
  message?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  first_name: string = '';
  last_name: string = '';
  visitor_type: string = '';
  company_name: string = '';
  mobile_number: string = '';
  person_visiting: string = '';
  isSick: boolean = true;
  key_id: string = '';
  key_duration: number = 1;
  loading: boolean = false;
  isCapture: boolean = false;
  isPhotoCaptured: boolean = false;
  isKeyChecked: boolean = false;

  constructor(
    private http: HttpClient,
    private barcodeScanner: BarcodeScanner,
    public toastController: ToastController
  ) {}

  ScanKeyID() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        this.key_id = barcodeData.text;
        this.isKeyChecked = true;
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

  showCapture() {
    this.isCapture = !this.isCapture;
    if (this.isCapture == false) {
      this.isPhotoCaptured = true;
    }
  }

  onMobileChange(value: string) {
    this.mobile_number = value;
  }

  onCompanyChange(value: string) {
    this.company_name = value;
  }

  onVisitorChange(value: string) {
    this.visitor_type = value;
  }

  onlnameChange(value: string) {
    this.last_name = value;
  }

  onfnameChange(value: string) {
    this.first_name = value;
  }

  handleLoading(value: boolean) {
    this.loading = value;
  }

  submit() {
    const data = {
      first_name: this.first_name,
      last_name: this.last_name,
      company_name: this.company_name,
      visitor_type: this.visitor_type,
      mobile_number: this.mobile_number,
      person_visiting: this.person_visiting,
      isSick: this.isSick,
      key_id: this.key_id,
      key_duration: this.key_duration,
    };
    this.loading = true;
    this.http
      .post<ReturnResponse>('http://localhost/index.php/history/create', data)
      .subscribe(
        async (response: ReturnResponse) => {
          if (response.status) {
            this.loading = false;
            const toast = await this.toastController.create({
              message: response.message,
              position: 'top',
              duration: 2000,
              cssClass: 'alert-class',
            });
            toast.present();
          } else {
            this.loading = false;
            const toast = await this.toastController.create({
              message: response.message,
              position: 'top',
              duration: 2000,
              cssClass: 'alert-class',
            });
            toast.present();
          }
        },
        async () => {
          this.loading = false;
          const toast = await this.toastController.create({
            message: 'Internal Server Error',
            position: 'top',
            duration: 2000,
            cssClass: 'alert-class',
          });
          toast.present();
        }
      );
  }

  ngOnInit() {}
}
