import { Component, OnInit } from '@angular/core';
import { UserServiceModule, User } from 'src/app/auth/user-service.module';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/search/post.servise';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-close-account-settings',
  templateUrl: './close-account-settings.component.html',
  styleUrls: ['./close-account-settings.component.css']
})
export class CloseAccountSettingsComponent implements OnInit {

  constructor(private userService: UserServiceModule, private router : Router,private postsService : PostsService) { }

  currentUser : User = null;
  logged : boolean = false;

  errorExists = false;
  errorText = "";
  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.logged.subscribe(user => this.logged = user);
   /* if(!this.logged){
      this.router.navigate(['']);
    }*/
  }

  onSubmit(form: NgForm){
    
    if(!this.userService.isPasswordCorrect(this.currentUser.email,form.value.password)){
      this.errorExists = true;
      this.errorText = "Current password is wrong";;
      return;
    }
    
    if(form.value.passwordRepeat != form.value.password){  
      this.errorExists = true;
      this.errorText = "Passwords do not match";
      console.log( form.value.passwordRepeat + " " + form.value.password );
      return;

    }
    this.errorExists = false;
  
    this.userService.removeUser(this.currentUser.id);
    this.userService.logout();
    this.router.navigate(['']);
    
   
   
   
}

}
