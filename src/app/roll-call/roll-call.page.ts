import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

interface CurrentVisitorsDataType {
  first_name: string;
  last_name: string;
  visitor_type: string;
  created_at: string;
  mobile_number: string;
}

interface CurrentVisitorsType {
  status: boolean;
  data: CurrentVisitorsDataType[];
  message: string;
}

@Component({
  selector: 'app-roll-call',
  templateUrl: './roll-call.page.html',
  styleUrls: ['./roll-call.page.scss'],
})
export class RollCallPage implements OnInit {
  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}
  usersInfo: CurrentVisitorsDataType[] = [];
  isDivVisible = false;
  KeyReturn = false;
  loading: boolean = false;
  isShowCall: boolean = false;
  call_name = '';
  call_number = '';

  showCallModal(user: CurrentVisitorsDataType) {
    this.isDivVisible = true;
    this.call_name = user.first_name + ' ' + user.last_name;
    this.call_number = user.mobile_number;
  }

  closeCallModal() {
    this.isDivVisible = false;
  }

  rollcall() {
    this.isDivVisible = false;
  }

  KeyButton() {
    this.KeyReturn = !this.KeyReturn;
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
          this.isShowCall = false;
        },
        async (err) => {
          this.loading = false;
          this.isShowCall = false;
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
