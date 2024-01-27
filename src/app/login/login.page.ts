import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface LoginResponse {
  status: boolean;
  data?: object;
  message?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  input_email: string = '';
  input_password: string = '';
  loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.input_email = this.loginForm.controls['email'].value;
    this.input_password = this.loginForm.controls['password'].value;
    const data = { email: this.input_email, password: this.input_password };
    this.http
      .post<LoginResponse>('http://localhost/index.php/users/login', data)
      .subscribe(
        (response: LoginResponse) => {
          if (response.status) {
            this.userService.setEmail(this.input_email);
            this.router.navigate(['/home']);
          } else {
            console.log(response.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit() {}
}
