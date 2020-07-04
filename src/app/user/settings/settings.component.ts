import { Component, OnInit } from '@angular/core';
import { UserServiceModule } from 'src/app/auth/user-service.module';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/search/post.servise';
import { AuthService, User } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  logged : Boolean = false;
  currentUser : User = null;
  constructor(private userService: AuthService, private router : Router,private postsService : PostsService) { 
    this.userService.user.subscribe(user => this.currentUser = user);
    if(!this.userService.user){
      this.router.navigate(['']);
    }
  

  }

  ngOnInit(): void {
    if(!this.userService.user){
      this.router.navigate(['']);
    }
  }

}
