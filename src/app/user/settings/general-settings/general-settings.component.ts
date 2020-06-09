import { Component, OnInit } from '@angular/core';
import { User, UserServiceModule } from 'src/app/auth/user-service.module';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/search/post.servise';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {
  
 
  constructor(private userService: UserServiceModule, private router : Router,private postsService : PostsService) { }
  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  currentUser : User = null;
  logged : boolean = false;
  //manages form fields values
  firstName = new FormControl('');
  lastName = new FormControl('');
  birthDate = new FormControl('');
  location = new FormControl('');
  //interests = new FormControl('');
  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.logged.subscribe(user => this.logged = user);
    if(!this.logged){
      this.router.navigate(['']);
    }else{
      this.firstName.setValue(this.currentUser.firstName);
      this.lastName.setValue(this.currentUser.lastName);
      this.birthDate.setValue(this.currentUser.date);
      this.location.setValue(this.currentUser.location);
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
    
  }
  onSubmit(form: NgForm){
    
      this.currentUser.firstName =  this.firstName.value;
      this.currentUser.lastName = this.lastName.value;
      this.currentUser.date = this.birthDate.value;
      this.currentUser.location = this.location.value;
      
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
