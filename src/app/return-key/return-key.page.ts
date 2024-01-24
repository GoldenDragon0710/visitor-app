import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-key',
  templateUrl: './return-key.page.html',
  styleUrls: ['./return-key.page.scss'],
})
export class ReturnKeyPage implements OnInit {

 constructor() { }
	 isDivVisible = false;
	 KeyReturn = false;

	  toggleDiv() {
		this.isDivVisible = !this.isDivVisible;
	  }
	  
	  
	  KeyButton() {
		this.KeyReturn = !this.KeyReturn;
	  }
	 
		
		ngOnInit() {
	  }

}
