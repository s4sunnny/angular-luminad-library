import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-logon-or-regis',
  templateUrl: './logon-or-regis.component.html',
  styleUrls: ['./logon-or-regis.component.css'],
})
export class LogonOrRegisComponent implements OnInit {
  errorMessage: any = '';
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.errorMessage = '';
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.appService.doLogin(this.form.value).subscribe(
        (response: any) => {
          console.log(response);
          this.appService.loginUser(response.jwtToken);
          if (response.userType === 'ADMIN') {
            this.router.navigateByUrl('adminDashboard');
          } else {
            this.router.navigateByUrl('dashboard');
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error.error);
          console.log(error);
          var msg = '';
          if (error.status == 401) {
            msg = 'Unauthorized';
          }
          if (error.status == 400) {
            msg = 'Bad Request';
          }
          this.errorMessage = msg;
          //return error;
        }
      );
      return;
    }
  }
}
