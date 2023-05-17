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

  hideBookList: Boolean = true;
  hideGetBooksById:Boolean = true;
  LoadedBookList:any = [];
  bookId:Number = 0;
  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
    this.currentUser = this.appService.isLoggedIn();
  }

  ngOnInit(): void {
  }
  showBooksList(){
    this.hideBookList = false;
    this.hideGetBooksById = true;
    this.getListOfBooks();
  }

  getListOfBooks() {
    this.appService.getBooks()?.subscribe((resp: any) => {
      console.log(resp);
      this.LoadedBookList = resp;
    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
      }
    );
  }

  showBooksByIdBooks(){
    this.hideBookList = true;
    this.hideGetBooksById = false;
  }

  getBooksById() {
    this.appService.getBooksById(this.bookId)?.subscribe((resp: any) => {
      console.log(resp);

        this.hideBookList = false;
        this.hideGetBooksById = true;
        this.LoadedBookList = [];
        this.LoadedBookList.push(resp);
    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
      }
    );
  }


  logout() {
    this.appService.logout();
  }
}
