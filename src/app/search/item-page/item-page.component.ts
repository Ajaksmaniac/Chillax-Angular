import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../post.servise';
import { Post } from '../post.model';
import { User} from 'src/app/auth/auth.service';
import {  MatDialog } from '@angular/material/dialog';
import { BookItemComponent } from '../book-item/book-item.component';
import { PostServiceService } from '../post-service.service';
import { Subject, Observable, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';




@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit,AfterContentInit {

  constructor(private route: ActivatedRoute,private postsService : PostServiceService, private router : Router,
    private userService: AuthService,private dialog : MatDialog) { 
      if(this.id == null){
        this.router.navigate['']
      }
      this.postsService.getPostById(this.id).valueChanges().pipe(
    
        ).subscribe(data =>{
          this.post =data;
        /* data.parking == true ? this.parking = "Has Parking": this.parking = "Doesn't have parking";
         data.pets == true ? this.pets = "Alowed": this.pets = "Not alowed";
         data.restaurant == true  ? this.restaurant = "Has restaurant": this.restaurant = "Doesn't have restaurant";
         data.swimingPool == true  ? this.swimingPool = "Has swiming pool": this.swimingPool = "Doesn't have swiming pool";
       */
        });
        console.log(this.post)
    }
  
  //DataSet/config for star rating
  dataSet = {starSize: 15,
    showLabels: false
  };

    //Aditional stuff of the place
    parking: string;
    pets : string;
    restaurant : string;
    swimingPool: string;

    //if theres an users logged
    logged : boolean = false;;
    //current logged user
    currentUser : User = null;

    //post id in favorites list
    inList : boolean = false;
    //post id, get id from the url
    id  = this.route.snapshot.paramMap.get("id");


    fromDate : Date;
    toDate: Date;
    hasFavorites: boolean = false;
    post : Post;
  destroy$:Subject<void> = new Subject();
  ngOnInit(): void {
    if(this.id == null){
      this.router.navigate['']
    }
    this.postsService.getPostById(this.id).valueChanges().pipe(
    
    ).subscribe(data =>{
      this.post = data
    /* data.parking == true ? this.parking = "Has Parking": this.parking = "Doesn't have parking";
     data.pets == true ? this.pets = "Alowed": this.pets = "Not alowed";
     data.restaurant == true  ? this.restaurant = "Has restaurant": this.restaurant = "Doesn't have restaurant";
     data.swimingPool == true  ? this.swimingPool = "Has swiming pool": this.swimingPool = "Doesn't have swiming pool";
     console.log(this.post)*/
    });
   
   
   //this.userService.logged.subscribe(log => this.logged = log);
   this.userService.user.subscribe(user =>{
    if(user){
      this.currentUser = user
      this.logged = true;
    }
  
  })
  
   
   
    //If current post.id is in users favorites
    if(this.logged == true && this.currentUser != null){
      
        this.hasFavorites = true;
    /*const posts =  this.userService.getAllFavoritePostsForUser(this.currentUser.uid)
    posts.subscribe(data => this.inList = data)*/
      
    }

  }

  date = new Date().getFullYear();

  ngAfterContentInit(): void {
    if(this.id == null){
      this.router.navigate['']
    }
     this.postsService.getPostById(this.id).valueChanges().pipe(
     
    ).subscribe(data =>{
      this.post =data;
      console.log(this.post);
    /* data.parking == true ? this.parking = "Has Parking": this.parking = "Doesn't have parking";
     data.pets == true ? this.pets = "Alowed": this.pets = "Not alowed";
     data.restaurant == true  ? this.restaurant = "Has restaurant": this.restaurant = "Doesn't have restaurant";
     data.swimingPool == true  ? this.swimingPool = "Has swiming pool": this.swimingPool = "Doesn't have swiming pool";
     */
    });
   
    this.userService.user.subscribe(user => this.currentUser = user);
    
    if(this.logged == true && this.currentUser != null){
      if(this.currentUser.favorites != null || this.currentUser.favorites != undefined){
        this.hasFavorites = true;
        this.inList =this.currentUser.favorites.includes(Number(this.post.id));
      }
      
    }
  }
 
 
  deletePost(){
   return this.postsService.deletePost(this.id).then(function(){
      this.router.navigate['']
    })
 
  }
  openDialog(){
    const dialogRef = this.dialog.open(BookItemComponent,{
        data:{
          name : this.post.name,
          price : this.post.price,
          fromDate : this.fromDate,
          toDate : this.toDate

        }
    });

    dialogRef.afterClosed().subscribe(result =>{
      
   //mat-dialog results
      if(result){
        
        //fromDate and toDate passed from mat dialog
        this.fromDate = result.fromDate;
        this.toDate = result.toDate;
        
       

       // this.userService.addBooking(Number(this.post.id),this.fromDate,this.toDate, this.post,this.currentUser.id);
       this.userService.addBooking(this.post.id,this.fromDate,this.toDate,this.currentUser.uid);
            
        this.router.navigate(['/bookings'])
      }else{
        console.log("canceled")
      }
    });
  
  }
  

  addToFavorites(){
    
    this.userService.getAllFavoritePostsForUser(this.currentUser.uid).then((data) =>{
      const favorites : any[] =[];
      data.forEach(element => {
        favorites.push(element);
      });
     
       favorites.push(this.id);
        data = {
          favorites : favorites

        }

        this.userService.updateUser(this.currentUser.uid, data)
    })
     
      
    
    this.router.navigate(['/favorites'])
    
  }
  
  removeFromFavorites(){
    const index = this.currentUser.favorites.indexOf(Number(this.id));

    if (index > -1) {
      this.currentUser.favorites.splice(index, 1);
    }
    this.router.navigate(['/favorites'])
  }
}
