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
    this.router.navigate(['/current-visitor']);
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
    this.school_name = this.userService.getSchoolName();
    setInterval(() => {
      this.updateDateTime();
    }, 1000); // Update every second
  }
}
