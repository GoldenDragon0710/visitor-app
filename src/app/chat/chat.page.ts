import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
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
