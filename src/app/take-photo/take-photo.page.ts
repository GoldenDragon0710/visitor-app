import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.page.html',
  styleUrls: ['./take-photo.page.scss'],
})
export class TakePhotoPage implements OnInit {
  constructor() {}
  isDivVisible = false;
  KeyReturn = false;
  ScannerVisible = false;
  ScannerBtn: boolean = true;

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }

  KeyButton() {
    this.KeyReturn = !this.KeyReturn;
  }
  toggleScan() {
    this.ScannerVisible = !this.ScannerVisible;
    this.ScannerBtn = !this.ScannerBtn;
  }

  ngOnInit() {}
}
