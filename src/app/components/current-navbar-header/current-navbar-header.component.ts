import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-current-navbar-header',
  templateUrl: './current-navbar-header.component.html',
  styleUrls: ['./current-navbar-header.component.scss'],
})
export class CurrentNavbarHeaderComponent implements OnInit {
  constructor(private userService: UserService) {}
  currentDateTime: string = '';
  school_name: string = '';

  updateDateTime() {
    const currentDate = new Date();
    this.currentDateTime = currentDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  ngOnInit() {
    let temp = localStorage.getItem('school_name');
    if (temp !== null) {
      this.school_name = temp;
    }
    setInterval(() => {
      this.updateDateTime();
    }, 1000); // Update every second
  }
}
