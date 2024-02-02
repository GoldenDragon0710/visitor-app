import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

interface SignUpResponse {
  status: boolean;
  message?: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignUpPage implements OnInit {
  first_name: string = '';
  last_name: string = '';
  school_name: string = '';
  role: string = '';
  mobile_number: string = '';
  email: string = '';
  password: string = '';
  signUpForm: FormGroup;
  loading: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    public toastController: ToastController
  ) {
    this.signUpForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      school_name: ['', Validators.required],
      role: ['', Validators.required],
      mobile_number: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async submit() {
    if (!this.signUpForm.valid) {
      const toast = await this.toastController.create({
        message: 'Please enter correctly',
        position: 'top',
        duration: 2000,
        cssClass: 'alert-class',
      });
      toast.present();
      return;
    }
    this.first_name = this.signUpForm.controls['first_name'].value;
    this.last_name = this.signUpForm.controls['last_name'].value;
    this.school_name = this.signUpForm.controls['school_name'].value;
    this.role = this.signUpForm.controls['role'].value;
    this.mobile_number = this.signUpForm.controls['mobile_number'].value;
    this.email = this.signUpForm.controls['email'].value;
    this.password = this.signUpForm.controls['password'].value;

    const data = {
      first_name: this.first_name,
      last_name: this.last_name,
      school_name: this.school_name,
      role: this.role,
      mobile_number: this.mobile_number,
      email: this.email,
      password: this.password,
    };
    this.loading = true;
    this.http
      .post<SignUpResponse>('http://localhost/index.php/staff/register', data)
      .subscribe(
        async (response: SignUpResponse) => {
          if (response.status) {
            const toast = await this.toastController.create({
              message: response.message,
              position: 'top',
              duration: 2000,
              cssClass: 'alert-class',
            });
            toast.present();
            this.loading = false;
            this.router.navigate(['/login']);
          } else {
            const toast = await this.toastController.create({
              message: response.message,
              position: 'top',
              duration: 2000,
              cssClass: 'alert-class',
            });
            toast.present();
            this.loading = false;
          }
        },
        async (error) => {
          const toast = await this.toastController.create({
            message: 'Internal Server Error',
            position: 'top',
            duration: 2000,
            cssClass: 'alert-class',
          });
          toast.present();
          this.loading = false;
        }
      );
  }

  ngOnInit() {}
}
