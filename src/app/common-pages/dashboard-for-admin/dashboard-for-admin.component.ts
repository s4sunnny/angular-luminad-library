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
  editButton:Boolean = true;
  addButton:Boolean = true;
  bookDetails:any = {
    bookId:'',
    title:'',
    author:'',
    publicationDate:'',
    isbn:'',
    noOfPages:''
  }
  bookObj:any = '';
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
      this.LoadedBookList = [];
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
      this.bookObj = resp;
      //this.showBooksList();
      this.LoadedBookList = [];
      if(!this.hideGetBooksById){
        this.hideBookList = false;
        this.hideAddBooks = true;
        this.hideGetBooksById = true;
        this.hideUpdateBooks = true;
        this.hideDeleteBooks = true;

        this.LoadedBookList.push(resp);
      }

    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
      }
    );
  }

  showAddBooks(){
    this.addButton = false;
    this.editButton = true;
    //this.resetController();
    this.hideBookList = true;
      this.hideAddBooks = false;
      this.hideGetBooksById = true;
      this.hideUpdateBooks = true;
      this.hideDeleteBooks = true;
  }


  addBooks() {
    this.appService.addBooks(this.bookDetails)?.subscribe((resp: any) => {
      console.log(resp);
      alert("Book Added successfully")
            this.showBooksList();
    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
        if(error.status == "200"){
          alert("Book Added successfully")
            this.showBooksList();
          }
      }
    );
  }

  showUpdateBooks(){
    this.hideBookList = true;
      this.hideAddBooks = true;
      this.hideGetBooksById = true;
      this.hideUpdateBooks = false;
      this.hideDeleteBooks = true;
      this.getListOfBooks();
  }


  updateBooks() {
    this.appService.updateBooks(this.bookDetails)?.subscribe((resp: any) => {
      console.log(resp);
      alert("Book Updated successfully")
          this.showUpdateBooks();
    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
        if(error.status == "200"){
        alert("Book Updated successfully")
          this.showUpdateBooks();
        }
      }
    );
  }


  showDeleteBooks(){
    this.hideBookList = true;
      this.hideAddBooks = true;
      this.hideGetBooksById = true;
      this.hideUpdateBooks = true;
      this.hideDeleteBooks = false;
      this.getListOfBooks();
  }


  deleteBooks(bookID:any) {
    this.appService.deleteBookById(bookID)?.subscribe((resp: any) => {
      console.log(resp);
      alert("Book deleted successfully")
          this.showDeleteBooks();
    },
      (error: any) => {
        console.log(error.error);
        console.log(error)
        if(error.status == "200"){
          alert("Book deleted successfully")
          this.showDeleteBooks();
        }
      }
    );
  }

  editBook(bookId:Number){
   this.resetController();
   this.bookId = 0;
   this.bookId = bookId;
    this.showAddBooks();
    this.getBooksById();
    console.log(this.bookObj);
    this.addButton = true;
    this.editButton = false;
    setTimeout(() => {
       this.bookDetails.bookId = this.bookObj.bookId;
    this.bookDetails.title = this.bookObj.title;
    this.bookDetails.author = this.bookObj.author;
    this.bookDetails.publicationDate = this.bookObj.publicationDate;
    this.bookDetails.isbn = this.bookObj.isbn;
    this.bookDetails.noOfPages = this.bookObj.noOfPages;
    }, 1000);

  }

  logout() {
    this.appService.logout();
  }

  resetController(){
    this.bookDetails.bookId = '';
    this.bookDetails.title = '';
    this.bookDetails.author = '';
    this.bookDetails.publicationDate = '';
    this.bookDetails.isbn = '';
    this.bookDetails.noOfPages = '';
  }
}
