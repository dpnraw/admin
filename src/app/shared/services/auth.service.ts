import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class AuthService{

    private authUrl:string = 'https://reqres.in/api';
    private loggedIn:boolean =false;
    constructor(private http:Http){
        //look at localstorage to check if the user is logged in

        this.loggedIn =!!localStorage.getItem('auth_token');

    }
    //check if the user is logged in
    isLoggedIn(){
        return this.loggedIn;
    }

    //log the user in
    login(username:string, password:string):Observable<string>{
      return this.http.post(`${this.authUrl}/login`,{ username, password})
      .map(res => res.json())
      .do(res => {
          if (res.token) localStorage.setItem('auth_token', res.token);
      })  
    }
}