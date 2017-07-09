import { Component, OnInit } from '@angular/core';
import {User} from '../shared/model/user';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  users:User[];

  constructor( private service:UserService ) { }

  ngOnInit() {
  }

}
