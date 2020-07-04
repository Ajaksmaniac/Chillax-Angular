import { Component, OnInit } from '@angular/core';
import {PostsService} from './post.servise';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService, User } from '../auth/auth.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 /* service : PostsService;
  data = this.service.getAllPosts() ;*/
  logged : Boolean = false;
  currentUser : User = null;
  
  constructor( private router:Router,private userService: AuthService) {
    this.userService.user.subscribe(user =>{
      if(user){
        this.currentUser = user
        this.logged = true;
      }
    
    });
     
   }

  ngOnInit(): void {
    this.userService.user.subscribe(user =>{
      if(user){
        this.currentUser = user
        this.logged = true;
      }
    
    });
    
  }
  searchByRelaxationName(form: NgForm) {
    var name = form.value.relaxationName;
    this.router.navigate(['/search', name]);
  }

  
}
