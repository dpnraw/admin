import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import { User} from '../model/user';




@Injectable()


export class UserService{

    private userUrl:string ='https://reqres.in/api/users';

    constructor(private http:Http){}

    //get all users
    getUsers(): Observable<User[]>{
         return this.http.get(this.userUrl)
    .map(res =>res.json().data);
      
    }


     updateUser(id: number, newfirst_name:string){
        const body = JSON.stringify({users: newfirst_name});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('this.userUrl' + id, body, {headers: headers})
            .map(
                (response: Response) => response.json()
            );
    }



}