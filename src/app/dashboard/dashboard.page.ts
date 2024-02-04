import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

interface CurrentVisitorsDataType {
  first_name: string;
  last_name: string;
  visitor_type: string;
  created_at: string;
  key_id: string;
}

interface CurrentVisitorsType {
  status: boolean;
  data: CurrentVisitorsDataType[];
  message: string;
}

interface ReturnKeyType {
  status: boolean;
  data: CurrentVisitorsDataType[];
  message: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}
  usersInfo: CurrentVisitorsDataType[] = [];
  isDivVisible = false;
  isShowReturn = false;
  selectedKey = '';
  loading: boolean = false;
  return_name = '';

  closeReturnModal() {
    this.isShowReturn = false;
  }

  showReturnModal(user: CurrentVisitorsDataType) {
    this.isShowReturn = true;
    this.selectedKey = user.key_id;
    this.return_name = user.first_name + ' ' + user.last_name;
  }

  ReturnKey() {
    const data = {
      key_id: this.selectedKey,
    };
    this.loading = true;
    this.http
      .post<ReturnKeyType>(
        'http://100.24.5.202/index.php/history/keyExpire',
        data
      )
      .subscribe(
        async (response: ReturnKeyType) => {
          if (response.status) {
            this.usersInfo = response.data;
            const toast = await this.toastController.create({
              message: response.message,
              position: 'top',
              duration: 2000,
              cssClass: 'alert-class',
            });
            toast.present();
          } else {
            const toast = await this.toastController.create({
              message: response.message,
              position: 'top',
              duration: 2000,
              cssClass: 'alert-class',
            });
            toast.present();
          }
          this.loading = false;
          this.isShowReturn = false;
        },
        async (err) => {
          this.loading = false;
          this.isShowReturn = false;
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

  ngOnInit() {
    this.loading = true;
    const data = {
      school_name: localStorage.getItem('school_name'),
    };
    this.http
      .post<CurrentVisitorsType>(
        'http://100.24.5.202/index.php/history/getAll',
        data
      )
      .subscribe(
        async (response: CurrentVisitorsType) => {
          if (response.status) {
            this.usersInfo = response.data;
          } else {
            const toast = await this.toastController.create({
              message: response.message,
              position: 'top',
              duration: 2000,
              cssClass: 'alert-class',
            });
            toast.present();
          }
          this.loading = false;
          this.isShowReturn = false;
        },
        async (err) => {
          this.loading = false;
          this.isShowReturn = false;
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
}
