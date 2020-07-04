import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Form, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserServiceModule } from '../user-service.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signupForm : FormGroup;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};


  errorExists = false;
  errorText = "";
  constructor(private userService: UserServiceModule, private router: Router,public auth:AuthService, public fb: FormBuilder) { }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      'email' : ['',[
        Validators.required,
        Validators.email
        ]
      ],
      'password' : ['',[
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]],
      'firstName' : ['',[Validators.required]],
      'lastName' : ['',[Validators.required]],
      'location' : ['',[Validators.required]],
      'selectedItems' : ['',[Validators.maxLength(12)]],
      'birthDate': ['']
    });

    

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
    this.selectedItems = [
      
    ];
    
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

  visible : boolean = false;
  get email(){return this.signupForm.get('email')}
  get password(){return this.signupForm.get('password')}
  get firstName() {return this.signupForm.get('firstName')}
  get lastName() {return this.signupForm.get('lastName')}
  get selecteditems(){return this.signupForm.get('selectedItems')}
  get location(){return this.signupForm.get('location')}
  get birthDate(){return this.signupForm.get('birthDate')}
  
  signup(){
    this.visible = true;
    console.log(this.firstName.value )
    return this.auth.emailSignUp(this.email.value,this.password.value,{
      firstName : this.firstName.value,
      lastName : this.lastName.value,
      location : this.location.value,
      date : this.birthDate.value,
      password : this.password.value,
      likes : this.selectedItems

    })
    ;}
  /*setSelectedItems(user){
    return this.auth.updateUser(user,{likes: this.selectedItems});
  }
  setLocation(user){
    return this.auth.updateUser(user,{location: this.signupForm.get('location').value});
  }
  setbirthDate(user){
    return this.auth.updateUser(user,{date: this.signupForm.get('birthDate').value});
  }
  setPassword(user){
    return this.auth.updateUser(user,{password: this.password.value});
  }
  setFirstName(user){
    return this.auth.updateUser(user,{firstName:this.firstName.value });
  }
  setLastName(user){
    return this.auth.updateUser(user,{lastName: this.lastName.value});
  }*/

  /*onSubmit(form: NgForm){
   if(!this.userService.getUser(form.value.email)){
     this.errorExists = false;
    var interests = this.selectedItems.map(item => item.itemName);
     var newUser = this.userService.registerUser(form.value.email,form.value.password, form.value.birthdate, form.value.firstName,form.value.lastName, form.value.location , interests);
     this.router.navigate([''])
   }else{
     this.errorText = "User with this email already exists";
   }
  }*/
  onItemSelect(item:any){
    this.selectedItems.push(item);
    
    console.log(this.selectedItems);
    
}
OnItemDeSelect(item:any){
  
  const index = this.selectedItems.indexOf(item);
   
  if (index > -1) {
    this.selectedItems.splice(index, 1);
  }
    console.log(this.selectedItems);
    
}
onSelectAll(items: any){
   
    this.selectedItems = items;
    console.log(this.selectedItems);
}
onDeSelectAll(items: any){
  this.selectedItems = items;
    console.log(this.selectedItems);
}

}
