import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
