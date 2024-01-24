import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-call',
  templateUrl: './roll-call.page.html',
  styleUrls: ['./roll-call.page.scss'],
})
export class RollCallPage implements OnInit {

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
