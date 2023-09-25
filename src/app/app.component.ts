import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}

  public toastr_alert(type: string) {
    switch (type) {
      case 'success':
        this.toastr.success('Success Alert');
        break;
      case 'warning':
        this.toastr.warning('Warning Alert');
        break;
      case 'error':
        this.toastr.error('Error Alert');
        break;
      case 'info':
        this.toastr.info('Info Alert');
        break;
    }
  }

  public notiflix_alert(type: string) {
    switch (type) {
      case 'success':
        Notify.success('Success Alert');
        break;
      case 'warning':
        Notify.warning('Warning Alert');
        break;
      case 'error':
        Notify.failure('Error Alert');
        break;
      case 'info':
        Notify.info('Info Alert');
        break;
    }
  }
}
