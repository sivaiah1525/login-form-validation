import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  // alertError;
  // @ViewChild('passwordCtrl', { static: true }) passwordCtrl;
  error = null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // console.log(this.passwordCtrl);
  }
  saveData(data) {
    this.http
      .post('http://localhost:3000/user', data)
      .toPromise()
      .then((result) => {})
      .catch((error) => {});
  }

  handleCPasswordChanges(form) {
    if (form.controls.cPassword.value !== form.controls.password.value) {
      form.controls.cPassword.setErrors({ notMatched: true });
    }
  }
}
