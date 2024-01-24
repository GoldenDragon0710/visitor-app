import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor() {}
  isDivVisible = false;
  KeyReturn = false;

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }

  KeyButton() {
    this.KeyReturn = !this.KeyReturn;
  }

  ngOnInit() {}
}
