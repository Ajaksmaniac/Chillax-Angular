import { Component, OnInit } from '@angular/core';
import { UserServiceModule, User } from 'src/app/auth/user-service.module';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-settings',
  templateUrl: './change-password-settings.component.html',
  styleUrls: ['./change-password-settings.component.css']
})
export class ChangePasswordSettingsComponent implements OnInit {
  errorExists = false;
  errorText = "";
  constructor(private userService: UserServiceModule,private router: Router) { }
  currentUser : User = null;
  logged : boolean = false;
  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.logged.subscribe(user => this.logged = user);

    if(!this.logged){
      this.router.navigate(['']);
    }
  }


  onSubmit(form: NgForm){
    
    if(!this.userService.isPasswordCorrect(this.currentUser.email,form.value.currentPassword)){
      this.errorExists = true;
      this.errorText = "Current password is wrong";;
      return;
    }
    
    if(form.value.newPassword != form.value.newPasswordRepeat){  
      this.errorExists = true;
      this.errorText = "Passwords do not match";
      return;

    }
    this.errorExists = false;
  
    
    console.log( form.value.currentPassword + " " + form.value.newPassword + " " + form.value.newPasswordRepeat )
      this.currentUser.password = form.value.newPassword;
      

      this.currentUser = null;
      this.logged = false;
      this.userService.logout();
      this.router.navigate(['']);
    
   
}

}
