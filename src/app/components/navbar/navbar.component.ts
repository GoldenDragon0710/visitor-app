import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
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

interface UserType {
  first_name: string;
  last_name: string;
  visitor_type: string;
  company_name: string;
  mobile_number: string;
}

interface GetUserResponse {
  data: UserType;
  status: boolean;
  message?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    public toastController: ToastController,
    private barcodeScanner: BarcodeScanner
  ) {}
  last_visitor = '';
  qrData = '';
  email: string = '';
  search_mobile: string = '';
  search_name: string = '';
  ScannerBtn: boolean = true;
  key_id = '';
  isReturnKey = false;
  return_name = '';
  isStillVisiting = false;
  @Output() navbarloading = new EventEmitter<boolean>(false);
  @Output() QRcode = new EventEmitter<string>();
  @Output() input_fname = new EventEmitter<string>();
  @Output() input_lname = new EventEmitter<string>();
  @Output() input_visitor = new EventEmitter<string>();
  @Output() input_mobile = new EventEmitter<string>();
  @Output() input_company = new EventEmitter<string>();

  user_fname: string = '';
  user_lname: string = '';
  user_visitor: string = '';
  user_mobile: string = '';
  user_company: string = '';

  closeStillVisiting() {
    this.isStillVisiting = false;
  }

  showData() {
    this.input_fname.emit(this.user_fname);
    this.input_lname.emit(this.user_lname);
    this.input_visitor.emit(this.user_visitor);
    this.input_mobile.emit(this.user_mobile);
    this.input_company.emit(this.user_company);
    this.isStillVisiting = false;
  }

  closeReturnKeyModal() {
    this.isReturnKey = false;
  }

  ReturnKey() {
    const data = {
      key_id: this.key_id,
    };
    this.navbarloading.emit(true);
    this.http
      .post<ReturnKeyResponse>(
        'http://localhost/index.php/history/keyExpire',
        data
      )
      .subscribe(
        async (response: ReturnKeyResponse) => {
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
          this.navbarloading.emit(false);
          this.isReturnKey = false;
        },
        async (err) => {
          this.navbarloading.emit(false);
          const toast = await this.toastController.create({
            message: 'Internal Server Error',
            position: 'top',
            duration: 2000,
            cssClass: 'alert-class',
          });
          toast.present();
          this.isReturnKey = false;
        }
      );
  }

  getUserbyKeyID() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        this.key_id = barcodeData.text;
        const data = {
          key_id: barcodeData.text,
        };
        this.navbarloading.emit(true);
        this.http
          .post<ReturnKeyResponse>(
            'http://localhost/index.php/history/getUserbyKeyID',
            data
          )
          .subscribe(
            (response: ReturnKeyResponse) => {
              if (response.status) {
                this.return_name =
                  response.data.first_name + response.data.last_name;
              }
              this.navbarloading.emit(false);
              this.isReturnKey = true;
            },
            async (err) => {
              this.navbarloading.emit(false);
              const toast = await this.toastController.create({
                message: 'Internal Server Error',
                position: 'top',
                duration: 2000,
                cssClass: 'alert-class',
              });
              toast.present();
            }
          );
      })
      .catch(async (err) => {
        this.navbarloading.emit(false);
        const toast = await this.toastController.create({
          message: 'Failed Scanning QR code',
          position: 'top',
          duration: 2000,
          cssClass: 'alert-class',
        });
        toast.present();
      });
  }

  LogOut() {
    this.navbarloading.emit(true);
    setTimeout(() => {
      this.navbarloading.emit(false);
      this.router.navigate(['/login']);
    }, 1000);
  }

  scanQRCode() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        const data = {
          key: barcodeData.text,
          mobile_number: '',
          first_name: '',
        };
        this.navbarloading.emit(true);
        this.http
          .post<GetUserResponse>(
            'http://localhost/index.php/visitors/search',
            data
          )
          .subscribe(
            async (response: GetUserResponse) => {
              this.navbarloading.emit(false);
              if (response.status) {
                this.user_fname = response.data.first_name;
                this.user_lname = response.data.last_name;
                this.user_visitor = response.data.visitor_type;
                this.user_mobile = response.data.mobile_number;
                this.user_company = response.data.company_name;
              }
              this.isStillVisiting = true;
            },
            async (err) => {
              this.navbarloading.emit(false);
              const toast = await this.toastController.create({
                message: 'Internal Server Error',
                position: 'top',
                duration: 2000,
                cssClass: 'alert-class',
              });
              toast.present();
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

  SearchVisitor() {
    const data = {
      mobile_number: this.search_mobile,
      first_name: this.search_name,
      key: '',
    };
    this.navbarloading.emit(true);
    this.http
      .post<GetUserResponse>('http://localhost/index.php/visitors/search', data)
      .subscribe(
        (response: GetUserResponse) => {
          this.navbarloading.emit(false);
          if (response.status) {
            this.user_fname = response.data.first_name;
            this.user_lname = response.data.last_name;
            this.user_visitor = response.data.visitor_type;
            this.user_mobile = response.data.mobile_number;
            this.user_company = response.data.company_name;
          }
          this.isStillVisiting = true;
        },
        async (err) => {
          this.navbarloading.emit(false);
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

  ngOnInit() {
    this.last_visitor = this.userService.getLastVisitor();
  }
}
