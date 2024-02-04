import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

interface ResData {
  first_name: string;
  last_name: string;
  school_name: string;
  role: string;
  mobile_number: string;
  email: string;
}

interface LoginResponse {
  status: boolean;
  data: ResData;
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
  loading: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    public toastController: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async submit() {
    if (!this.loginForm.valid) {
      const toast = await this.toastController.create({
        message: 'Please enter correctly',
        position: 'top',
        duration: 2000,
        cssClass: 'alert-class',
      });
      toast.present();
      return;
    }
    this.loading = true;
    this.input_email = this.loginForm.controls['email'].value;
    this.input_password = this.loginForm.controls['password'].value;
    const data = { email: this.input_email, password: this.input_password };
    this.http
      .post<LoginResponse>('http://100.24.5.202/index.php/staff/login', data)
      .subscribe(
        async (response: LoginResponse) => {
          if (response.status) {
            this.loading = false;
            this.userService.setSchoolName(response.data.school_name);
            localStorage.setItem('school_name', response.data.school_name);
            this.router.navigate(['/home']);
          } else {
            this.loading = false;
            const toast = await this.toastController.create({
              message: response.message,
              position: 'top',
              duration: 2000,
              cssClass: 'alert-class',
            });
            toast.present();
          }
        },
        async () => {
          this.loading = false;
          const toast = await this.toastController.create({
            message: 'Internal Server Error',
            position: 'top',
            duration: 2000,
            cssClass: 'alert-class',
          });
          toast.present();
        }
      );
  }

  ngOnInit() {}
}
