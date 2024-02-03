import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}
  currentDateTime: string = '';
  school_name: string = '';

  toggleDiv() {
    this.router.navigate(['/dashboard']);
  }

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
