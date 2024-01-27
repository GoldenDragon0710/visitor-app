import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

interface LogOutResponse {
  status: boolean;
  message?: string;
}

interface ReturnKeyResponse {
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
    private barcodeScanner: BarcodeScanner,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}
  email: string = '';
  search_mobile: string = '';
  search_name: string = '';
  ScannerBtn: boolean = true;
  KeyReturn = false;
  isDivVisible = false;
  @Output() QRcode = new EventEmitter<string>();

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }

  KeyButton() {
    this.KeyReturn = !this.KeyReturn;
  }

  returnKey() {
    const data = {
      search_mobile: this.search_mobile,
      search_name: this.search_name,
    };
    this.http
      .post<ReturnKeyResponse>(
        'http://localhost/index.php/history/returnKey',
        data
      )
      .subscribe(
        (response: ReturnKeyResponse) => {
          if (response.status) {
            console.log(response.message);
            this.KeyReturn = !this.KeyReturn;
          } else {
            console.log(response.message);
            this.KeyReturn = !this.KeyReturn;
          }
        },
        (error) => {
          console.log(error);
          this.KeyReturn = !this.KeyReturn;
        }
      );
  }

  LogOut() {
    this.email = this.userService.email;
    const data = { email: this.email };
    this.http
      .post<LogOutResponse>('http://localhost/index.php/users/logout', data)
      .subscribe(
        (response: LogOutResponse) => {
          if (response.status) {
            this.router.navigate(['/login']);
          } else {
            console.log(response.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  scanQRCode() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
        let str =
          'firstName:thomas;lastName:wiliam;mobile:123456789;email:thomas@gmail.com';
        this.QRcode.emit(str);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  ngOnInit() {}
}
