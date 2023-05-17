import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-dashboard-for-admin',
  templateUrl: './dashboard-for-admin.component.html',
  styleUrls: ['./dashboard-for-admin.component.css']
})
export class DashboardForAdminComponent implements OnInit {
  currentUser: any;
  hideBookList: Boolean = true;
  hideAddBooks:Boolean = true;
  hideGetBooksById:Boolean = true;
  hideUpdateBooks:Boolean = true;
  hideDeleteBooks:Boolean = true;
  LoadedBookList:any = [];

  bookDetails:any = {
    bookId:'',
    title:'',
    author:'',
    publicationDate:'',
    isbn:'',
    noOfPages:''
  }

  bookId:Number = 0;

  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
    this.currentUser = this.appService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  showBooksList(){
    this.hideBookList = false;
    this.hideAddBooks = true;
    this.hideGetBooksById = true;
    this.hideUpdateBooks = true;
    this.hideDeleteBooks = true;
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
    this.hideAddBooks = true;
    this.hideGetBooksById = false;
    this.hideUpdateBooks = true;
    this.hideDeleteBooks = true;
  }

  getBooksById() {
    this.appService.getBooksById(this.bookId)?.subscribe((resp: any) => {
      console.log(resp);
      //this.showBooksList();
      this.hideBookList = false;
      this.hideAddBooks = true;
      this.hideGetBooksById = true;
      this.hideUpdateBooks = true;
      this.hideDeleteBooks = true;

      this.LoadedBookList.push(resp);
    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
      }
    );
  }

  showAddBooks(){
    this.hideBookList = true;
      this.hideAddBooks = false;
      this.hideGetBooksById = true;
      this.hideUpdateBooks = true;
      this.hideDeleteBooks = true;
  }


  addBooks() {
    this.appService.addBooks(this.bookDetails)?.subscribe((resp: any) => {
      console.log(resp);
    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
      }
    );
  }

  showUpdateBooks(){
    this.hideBookList = true;
      this.hideAddBooks = true;
      this.hideGetBooksById = true;
      this.hideUpdateBooks = false;
      this.hideDeleteBooks = true;
  }


  updateBooks() {
    this.appService.updateBooks(this.bookDetails)?.subscribe((resp: any) => {
      console.log(resp);
    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
      }
    );
  }


  showDeleteBooks(){
    this.hideBookList = true;
      this.hideAddBooks = true;
      this.hideGetBooksById = true;
      this.hideUpdateBooks = true;
      this.hideDeleteBooks = false;
  }


  deleteBooks() {
    this.appService.deleteBookById(this.bookId)?.subscribe((resp: any) => {
      console.log(resp);
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
