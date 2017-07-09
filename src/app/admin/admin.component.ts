import { Component, OnInit } from '@angular/core';
import {AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  credentials ={
    username:'',
    password:''
  }

  constructor( private service:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.service.login(this.credentials.username, this.credentials.password)
    .subscribe(
      data =>{
        console.log(data)
      })
  }


}
