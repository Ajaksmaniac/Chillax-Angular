import { Component, OnInit } from '@angular/core';
import { UserServiceModule, User } from 'src/app/auth/user-service.module';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/search/post.servise';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private userService: UserServiceModule, private router : Router,private postsService : PostsService) { }
  logged : boolean = false;
  currentUser : User = null;
  ngOnInit(): void {
    this.userService.logged.subscribe(user => this.logged = user);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    //In case non logged user triess to acces this component
    if(!this.logged){
      this.router.navigate(['']);
    }
  }

}
