import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message: any;
  currentUser: any;
  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
    this.currentUser = this.appService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  logout() {
    this.appService.logout();
  }
}
