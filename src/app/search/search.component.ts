import { Component, OnInit } from '@angular/core';
import {PostsService} from './post.servise';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { User, UserServiceModule } from '../auth/user-service.module';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 /* service : PostsService;
  data = this.service.getAllPosts() ;*/
  logged : boolean = false;
  currentUser : User = null;
  
  constructor( private router:Router,private userService: UserServiceModule) { }

  ngOnInit(): void {
    this.userService.logged.subscribe(user => this.logged = user);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    
  }
  searchByRelaxationName(form: NgForm) {
    var name = form.value.relaxationName;
    this.router.navigate(['/search', name]);
  }

  
}
