import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface SignUpResponse {
  status: boolean;
  data?: object;
  message?: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  input_firstName: string = '';
  input_lastName: string = '';
  input_company: string = '';
  input_visitorType: string = '';
  input_mobileNum: string = '';
  input_state: string = '';
  input_wwcc: string = '';
  input_email: string = '';
  input_password: string = '';
  signUpForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      visitorType: ['', Validators.required],
      mobileNum: ['', Validators.required],
      state: ['', Validators.required],
      wwcc: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (!this.signUpForm.valid) {
      return;
    }
    this.input_firstName = this.signUpForm.controls['firstName'].value;
    this.input_lastName = this.signUpForm.controls['lastName'].value;
    this.input_company = this.signUpForm.controls['company'].value;
    this.input_visitorType = this.signUpForm.controls['visitorType'].value;
    this.input_mobileNum = this.signUpForm.controls['mobileNum'].value;
    this.input_state = this.signUpForm.controls['state'].value;
    this.input_wwcc = this.signUpForm.controls['wwcc'].value;
    this.input_email = this.signUpForm.controls['email'].value;
    this.input_password = this.signUpForm.controls['password'].value;

    const data = {
      firstName: this.input_firstName,
      lastName: this.input_lastName,
      company: this.input_company,
      visitorType: this.input_visitorType,
      mobileNum: this.input_mobileNum,
      state: this.input_state,
      wwcc: this.input_wwcc,
      email: this.input_email,
      password: this.input_password,
    };
    this.http
      .post<SignUpResponse>('http://localhost/index.php/users/register', data)
      .subscribe(
        (response: SignUpResponse) => {
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
