import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { User, UserServiceModule } from 'src/app/auth/user-service.module';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/search/post.servise';
@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.css']
})
export class EmailSettingsComponent implements OnInit {
  currentUser : User = null;
  logged : boolean = false;
  constructor(private userService: UserServiceModule, private router : Router,private postsService : PostsService) { }
  email = new FormControl('');
  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.logged.subscribe(user => this.logged = user);
    /*if(!this.logged){
      this.router.navigate(['']);
    }else{
      this.email.setValue(this.currentUser.email);
      
    }*/
  }
  onSubmit(form: NgForm){
    
    this.currentUser.email =  this.email.value;
   
    
    this.router.navigate(['']);
}

}
