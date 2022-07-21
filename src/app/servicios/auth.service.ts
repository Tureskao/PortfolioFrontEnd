import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'https://localhost:3000/api';
  token: any; 

  constructor( private http: HttpClient, private router: Router) { }

  login (email: string , password: string){
    if(email != null && password != null){
      this.http.post(this.uri + '/authenticate', {email: email, password:password})
      .subscribe((resp:any) => 
      {this.router.navigate(['portfolio']);
      localStorage.setItem('auth_token', resp.token);
    })
    }
  }

  logout (){
    localStorage.removeItem('auth_token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}
