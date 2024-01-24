import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-visitor',
  templateUrl: './current-visitor.page.html',
  styleUrls: ['./current-visitor.page.scss'],
})
export class CurrentVisitorPage implements OnInit {

   constructor() { }
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
		
		ngOnInit() {
	  }

}
