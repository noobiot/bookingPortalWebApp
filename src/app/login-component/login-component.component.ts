import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {


  mobile: string = ''
  passCode: string = ''
  readonly defaultPassCode = '1234'
  errorMessage!: string

  constructor(private router: Router) {}
   


  onLogin() {
    if (this.mobile == '' || this.passCode == '') {
      this.errorMessage = 'Mobile Number and Passcode are required';
      return;
    }
    if (this.passCode === this.defaultPassCode) {
      localStorage.setItem('mobile', this.mobile);
      // localStorage.setItem('passCode', this.passCode);
      this.router.navigate(['/dashboard']);
    }
    else {
      this.errorMessage = 'Login attempt invalid';
    }

  }
}
