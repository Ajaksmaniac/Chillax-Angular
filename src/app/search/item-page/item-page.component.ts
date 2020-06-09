import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../post.servise';
import { Post } from '../post.model';
import { User, UserServiceModule } from 'src/app/auth/user-service.module';
import {  MatDialog } from '@angular/material/dialog';
import { BookItemComponent } from '../book-item/book-item.component';




@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit,AfterContentInit {

  constructor(private route: ActivatedRoute,private postsService : PostsService, private router : Router,
    private userService: UserServiceModule,private dialog : MatDialog) { }
  
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
 public post = this.postsService.getPostById(this.id);
  ngOnInit(): void {
  
   
    this.userService.logged.subscribe(log => this.logged = log);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  
    this.post.parking == true ? this.parking = "Has Parking": this.parking = "Doesn't have parking";
    this.post.pets == true ? this.pets = "Alowed": this.pets = "Not alowed";
    this.post.restaurant == true  ? this.restaurant = "Has restaurant": this.restaurant = "Doesn't have restaurant";
    this.post.swimingPool == true  ? this.swimingPool = "Has swiming pool": this.swimingPool = "Doesn't have swiming pool";
   
    //If current post.id is in users favorites
    if(this.logged == true && this.currentUser != null){
      if(this.currentUser.favorites != null || this.currentUser.favorites != undefined){
        this.hasFavorites = true;
        this.inList =this.currentUser.favorites.includes(Number(this.post.id));
      }
    }

  }

  ngAfterContentInit(): void {
    this.post = this.postsService.getPostById(this.id);
    this.userService.logged.subscribe(log => this.logged = log);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    
    this.post.parking == true ? this.parking = "Has Parking": this.parking = "Doesn't have parking";
    this.post.pets == true ? this.pets = "Alowed": this.pets = "Not alowed";
    this.post.restaurant == true  ? this.restaurant = "Has restaurant": this.restaurant = "Doesn't have restaurant";
    this.post.swimingPool == true  ? this.swimingPool = "Has swiming pool": this.swimingPool = "Doesn't have swiming pool";
    
    if(this.logged == true && this.currentUser != null){
      if(this.currentUser.favorites != null || this.currentUser.favorites != undefined){
        this.hasFavorites = true;
        this.inList =this.currentUser.favorites.includes(Number(this.post.id));
      }
      
    }
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
        
        const post : Post = this.postsService.getPostById(this.post.id);

        this.userService.addBooking(Number(this.post.id),this.fromDate,this.toDate, post,this.currentUser.id);
            
        this.router.navigate(['/bookings'])
      }else{
        console.log("canceled")
      }
    });
  
  }
  

  addToFavorites(){
  
    this.currentUser.favorites.push(Number(this.id));
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
