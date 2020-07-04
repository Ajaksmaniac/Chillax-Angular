import { Component, OnInit, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import {PostsService} from 'src/app/search/post.servise';
import { MatTableDataSource } from '@angular/material/table';
import {Post} from 'src/app/search/post.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { PostServiceService } from '../post-service.service';
import { AuthService, User } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit, AfterViewInit {
  displayedColumns = ["picture","name",  "status", "price", "date","rating"];
  dataSet = {starSize: 20,
    showLabels: false};
    logged : boolean = false;;
    currentUser : User;
    userLikes :any = [];
    location = "";
  postsSource = new MatTableDataSource<Post>();
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  constructor(private postsService : PostServiceService, private router : Router,private userService: AuthService) {
  this.userService.user.subscribe(user =>{
    this.location = user.location;
    this.currentUser = user
    if(user){
      this.currentUser = user
      this.logged = true;
    }
    this.userService.getUserLikes(this.currentUser.uid).then(data=>{

      const newArr=[];
      data.forEach(element => {
        newArr.push(element.itemName);
     
      });
      this.userLikes= newArr;
     // 
   
     //console.log(this.postsService.getAllPostByInterestsAndLocation(this.userLikes,this.currentUser.location));
 
    //  this.postsSource.data = this.postsService.getAllPostByInterestsAndLocation(this.userLikes,this.currentUser.location);
    });
 
   
   });
  
   }
 

  ngOnInit() {
    this.userService.user.subscribe(user =>{
      this.location = user.location;
    this.currentUser = user
    if(user){
      this.currentUser = user
      this.logged = true;
    }
    this.userService.getUserLikes(this.currentUser.uid).then(data=>{

      const newArr=[];
      data.forEach(element => {
        newArr.push(element.itemName);
     
      });
      this.userLikes= newArr;
     // 
   
     
    // this.postsSource.data = this.postsService.getAllPostByInterestsAndLocation(this.userLikes,this.currentUser.location);
    });
 
   
   });
  
  }
  ngAfterViewInit(): void {
    this.postsSource.sort = this.sort;
    this.postsSource.paginator = this.paginator;
  }
  doFilter(filterValue : String){
    this.postsSource.filter  = filterValue.trim().toLowerCase();
  }
  goToPage(id){
    this.router.navigate(['search/page',id])
}

}
