import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceModule, User } from '../user-service.module';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorExists = false;
  errorText = "";
  
 // @Output() onUserLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
 // @Output() loggedUser: EventEmitter<User> = new EventEmitter<User>();
  constructor(private userService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;

    this.userService.login(email,password);
    
    /*if(!user){
      this.errorExists = true;
      this.errorText = "There is no registered user with this email! " + email;
      return;
    }
    var isPasswordValid = this.userService.isPasswordCorrect(email,password);
    if(!isPasswordValid){
      this.errorExists = true;
      this.errorText = "Invalid password";
    }
    
    this.errorExists = false;
    //this.onUserLogged.emit(true);
    this.userService.setLoggedTrue();
    this.userService.setCurrentUser(user);
    //this.loggedUser.emit(user);
   this.router.navigate(['']);
    */
  }
  
}
