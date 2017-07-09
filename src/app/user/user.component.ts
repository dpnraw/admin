import { Component, OnInit,Input } from '@angular/core';
import {UserService } from '../shared/services/user.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   @Input() user:User;
   users: User[];
 
  
   editing = false;
  editValue = '';

 

  constructor( private service:UserService) { }

  ngOnInit() {
    this.service.getUsers()
        .subscribe(
            (users: User[]) => this.users = users,
            (error: Response) => console.log(error)
        );
    // this.service.getUsers()
    // .subscribe(users =>this.users=users)
  }


  
  activeUser;

  selectUser(user){
  this.activeUser = user;
}

  
   onEdit(){
    this.editing = true;
    this.editValue = this.user.first_name;
  }

  onUpdate(){
    
    this.service.updateUser(this.user.id, this.editValue)
        .subscribe(
            (users: User) => {
              this.user.first_name = this.editValue;
              this.editValue= '';

            }

        );
              console.log(this.user.first_name);
        
    this.editing = false;
  }


}
