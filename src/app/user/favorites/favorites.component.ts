import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/auth/auth.service';
import {PostsService} from 'src/app/search/post.servise';
import { MatTableDataSource } from '@angular/material/table';
import {Post} from 'src/app/search/post.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/search/post-service.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { database } from 'firebase';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, AfterViewInit {
  logged : boolean = false;
  currentUser : User = null;
  destroy$:Subject<void> = new Subject();
  constructor(private userService: AuthService, private router : Router, private postService : PostServiceService) {
   
  
   
    if(!this.userService.user){
      this.router.navigate(['']);
    }
    
   
    this.postsSource.sort = this.sort;
    this.postsSource.filter  = " ".trim().toLowerCase();
  
   } 

  displayedColumns = ["picture","name","date","rating"];

  

  dataSet = {
    starSize: 20,
    showLabels: false
  };


  postsSource = new MatTableDataSource<Post>();
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  
  
  ngOnInit(): void {

  
    //In case non logged user triess to acces this component
    if(!this.userService.user){
      this.router.navigate(['']);
    }else{
      this.postsSource.sort = this.sort;
   // getting getting favorites posts for current user
    this.userService.user.subscribe(user =>{
      this.userService.getAllFavoritePostsForUser(user.uid).then((data) =>{
      this.postsSource.data = this.postService.getAllPostsFromList(data);
      }
       
      )
       
           });
        
          this.postsSource.filter  = " ".trim().toLowerCase();
          this.postsSource.sort = this.sort;
         // console.log(this.postsSource.data)

     
    }
    
  }

  ngAfterViewInit(): void {
   
     this.postsSource.sort = this.sort;
    this.postsSource.paginator = this.paginator; 
  }

  doFilter(filterValue : String){
    this.postsSource.filter  = filterValue.trim().toLowerCase();
    console.log(this.postsSource.data)
  }
  goToPage(id){
    this.router.navigate(['search/page',id])
  }



}
