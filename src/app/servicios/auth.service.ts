import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://localhost:3000/api';
  currentUserSubject: BehaviorSubject<any>;

  constructor( private http: HttpClient, private router: Router) 
  { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  login (credentials:any):Observable<any> {
    return this.http.post(this.url, credentials)
          .pipe(map(data=>{
            sessionStorage.setItem('currentUser',JSON.stringify(data));
            return data;
          }))
  }




}
