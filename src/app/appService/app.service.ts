import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AppService {

 private urlToken = 'http://localhost:8080/library';

  constructor(private http: HttpClient, private router: Router) {
  }

   doLogin(credentials: any){
    localStorage.removeItem("token");
    console.log(credentials);
    return this.http.post(`${this.urlToken}/userLogin`, credentials);
  }
  //for login
  loginUser(token:any){
    console.log(token)
    localStorage.setItem("token", token);
    return true;
  }

  //to check login
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == null || token == undefined || token === '' || token == "undefined"){
      return false;
    }else{
      return true;
    }
  }
//for logout
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/loginOrRegis']);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getBooks(){
    if(this.isLoggedIn()){
      const headers = {
        "content-type": "application/json",
        "Authorization": "Bearer " + this.getToken()
      }
      return this.http.get<any>(`${this.urlToken}/getBooks`, {headers});
    }else{
      return;
    }
  }

  getBooksById(bookId:any){
    if(this.isLoggedIn()){
      const headers = {
        "content-type": "application/json",
        "Authorization": "Bearer " + this.getToken()
      }
    let queryParam = new HttpParams();
    queryParam = queryParam.append("bookId", bookId);
      return this.http.get<any>(`${this.urlToken}/getBookById`, {params:queryParam, headers: headers});
    }else{
      return;
    }
  }

  addBooks(bookObj:any){
    if(this.isLoggedIn()){
      const headers = {
        "content-type": "application/json",
        "Authorization": "Bearer " + this.getToken()
      }
      return this.http.post<any>(`${this.urlToken}/addBook`,bookObj, {headers});
    }else{
      return;
    }
  }

  updateBooks(bookObj:any){
    if(this.isLoggedIn()){
      const headers = {
        "content-type": "application/json",
        "Authorization": "Bearer " + this.getToken()
      }
      return this.http.post<any>(`${this.urlToken}/updateBookById`,bookObj, {headers});
    }else{
      return;
    }
  }

  deleteBookById(bookId:any){
    if(this.isLoggedIn()){
      const headers = {
        "content-type": "application/json",
        "Authorization": "Bearer " + this.getToken()
      }
    let queryParam = new HttpParams();
    queryParam = queryParam.append("bookId", bookId);
      return this.http.get<any>(`${this.urlToken}/deleteBookById`, {params:queryParam, headers: headers});
    }else{
      return;
    }
  }

}
