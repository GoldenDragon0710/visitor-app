import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  email: string = '';
  visitor_firstName: string = '';
  visitor_lastName: string = '';
  visitor_mobile: string = '';
  visitor_email: string = '';

  constructor() {}

  setEmail(email: string): void {
    this.email = email;
  }
}
