import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';

import { ActivatedRoute } from '@angular/router';
import { UserServiceModule, User } from './auth/user-service.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logged : boolean = false;;
  currentUser : User = null;

  constructor(private userService: UserServiceModule){
   
  }
  ngOnInit(): void {
   this.userService.logged.subscribe(log => this.logged = log);
   this.userService.currentUser.subscribe(user => this.currentUser = user);
  }


  
  
 


  
  
  
 public isLogged(l : boolean){
  this.logged = l;
  console.log(this.logged)
  
 }
 /*public loggedUser(user : User){
   this.currentUser = user;
   console.log(this.currentUser)
 }*/
 

  title = 'Chillax';
}
