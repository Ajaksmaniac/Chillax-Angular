import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { PostsService } from '../search/post.servise';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostServiceService } from '../search/post-service.service';
import { Post } from '../search/post.model';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})



export class AddPlaceComponent implements OnInit {

  addPostForm : FormGroup;
  
 
  logged : Boolean = false;
  currentUser : User = null;
  constructor(private userService: AuthService, private router : Router,private postsService : PostServiceService, public fb: FormBuilder) { 
    this.userService.user.subscribe(user =>{
      this.currentUser = user;
      if(!this.userService.user || this.currentUser.admin == false){
        this.router.navigate(['']);
      }
    });
    this.addPostForm = this.fb.group({
   
      'name' : ['',[Validators.required]],
      'parking' : ['',[Validators.required]],
      'pets' : ['',[Validators.required]],
      'picture' : ['',[Validators.required]],
      'price' : ['',[Validators.required]],
      'rating' : ['',[Validators.required]],
      'restaurant' : ['',[Validators.required]],
      'status' : ['',[Validators.required]],
      'subtype' : ['',[Validators.required]],
      'swimingPool' : ['',[Validators.required]],
      'type' : ['',[Validators.required]],
      'location' : ['',[Validators.required]]
      
    });

  }
  get Name(){return this.addPostForm.get('name')}
  get Parking(){return this.addPostForm.get('parking')}
  get Pets(){return this.addPostForm.get('pets')}
  get Picture(){return this.addPostForm.get('picture')}
  get Price(){return this.addPostForm.get('price')}
  get Rating(){return this.addPostForm.get('rating')}
  get Restaurant(){return this.addPostForm.get('restaurant')}
  get Status(){return this.addPostForm.get('status')}
  get Subtype(){return this.addPostForm.get('subtype')}
  get SwimingPool(){return this.addPostForm.get('swimingPool')}
  get Type(){return this.addPostForm.get('type')}
  get Location(){return this.addPostForm.get('location')}

 

  submit(){
    
   const data : Post= {
     name : this.Name.value,
     parking : this.Parking.value,
     pets : this.Pets.value,
     picture : this.Picture.value,
     rating : this.Rating.value,
     restaurant : this.Restaurant.value,
     status : this.Status.value,
     subtype : this.Subtype.value,
     swimingPool : this.SwimingPool.value,
     type : this.Type.value,
     location : this.Location.value,
    
    };
   
   this.postsService.createPost(data);
    this.router.navigate['']
    }
  

  ngOnInit(): void {
    this.userService.user.subscribe(user =>{
      this.currentUser = user;
      if(!this.userService.user || this.currentUser.admin == false){
        this.router.navigate(['']);
      }
    });
  }

}
