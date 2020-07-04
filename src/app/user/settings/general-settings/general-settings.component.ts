import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PostsService } from 'src/app/search/post.servise';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService, User } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {
  
 
  constructor(private userService: AuthService, private router : Router,private postsService : PostsService) {
    this.userService.user.subscribe(user => this.currentUser = user);
    console.log(this.currentUser)
   }
  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  logged : Boolean = false;
  currentUser : User = null;
  //manages form fields values
  firstName = new FormControl('');
  lastName = new FormControl('');
  birthDate = new FormControl('');
  location = new FormControl('');
  //interests = new FormControl('');
  ngOnInit(): void {
    //this.userService.user.subscribe(user => this.currentUser = user);
    //this.userService.logged.subscribe(logged => this.logged = logged);
   console.log(this.currentUser)
   this.userService.user.subscribe(user =>{
    this.firstName.setValue(user.firstName);
    this.lastName.setValue(user.lastName);
    this.birthDate.setValue(user.date);
    this.location.setValue(user.location);
    console.log(user.likes);
    this.selectedItems = user.likes;
   });
     
     // this.interests.setValue(this.currentUser.likes);
      this.dropdownList = [
        {"id":1,"itemName":"apartment"},
        {"id":2,"itemName":"cabin"},
        {"id":3,"itemName":"hostel"},
        {"id":4,"itemName":"hotel"},
        {"id":5,"itemName":"resort"},
        {"id":6,"itemName":"villa"},
        {"id":7,"itemName":"casino"},
        {"id":8,"itemName":"park"},
        {"id":9,"itemName":"pubs"},
        {"id":10,"itemName":"restaurant"},
        {"id":11,"itemName":"zoo"},
        {"id":12,"itemName":"coffe shop"}
  
      ];
      this.selectedItems = [];
      
      this.dropdownSettings = { 
        singleSelection: false, 
        text:"Select Interests",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes:"myclass custom-class",
        maxHeight: "300"
       
      };      
    
    
  }
  onSubmit(form: NgForm){
    this.userService.user.subscribe(user =>{
    const data = {
        firstName : this.firstName.value,
        lastName : this.lastName.value,
        date : this.birthDate.value,
        location : this.location.value,
        likes : this.selectedItems

    }
    this.userService.updateUser(user.uid,data);
    
  });
      this.router.navigate(['']);
  }
  onItemSelect(item:any){
    this.selectedItems.push(item);
    

    
}
OnItemDeSelect(item:any){
  
  const index = this.selectedItems.indexOf(item);
   
  if (index > -1) {
    this.selectedItems.splice(index, 1);
  } 
    
}
onSelectAll(items: any){
   
    this.selectedItems = items;
   
}
onDeSelectAll(items: any){
  this.selectedItems = items;
}

}
