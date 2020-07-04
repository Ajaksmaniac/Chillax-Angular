import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from './auth/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { PostsService } from './search/post.servise';
import { Observable } from 'rxjs';
import { Post } from './search/post.model';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logged : boolean = false;;
  currentUser : User = null;
  posts: Observable <Post>;
  constructor(private userService: AuthService, public route: ActivatedRoute, public router : Router){
  //  this.userService.addBooking();
    this.userService.user.subscribe(user =>{
      if(user){
        this.currentUser = user
        this.logged = true;
      }
    
    }
  );
 
 if(this.currentUser){
   this.logged = true;
 }
  }
  ngOnInit(): void {
  // this.userService.logged.subscribe(log => this.logged = log);
        this.userService.user.subscribe(user =>{
          if(user){
            this.currentUser = user
            this.logged = true;
          }
      }
    );
   
   if(this.currentUser){
     this.logged = true;
   }
  }


  
  
 logout(){
   this.userService.logout();
   this.logged = false;
   this.currentUser = null;
   this.router.navigate(['']);
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
