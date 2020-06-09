import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserServiceModule, User } from 'src/app/auth/user-service.module';
import {PostsService} from 'src/app/search/post.servise';
import { MatTableDataSource } from '@angular/material/table';
import {Post} from 'src/app/search/post.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, AfterViewInit {
  logged : boolean = false;
  currentUser : User = null;
 
  constructor(private userService: UserServiceModule, private router : Router,private postsService : PostsService) { } 

  displayedColumns = ["picture","name","date","rating"];



  dataSet = {
    starSize: 20,
    showLabels: false
  };


  postsSource = new MatTableDataSource<Post>();
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  
  
  ngOnInit(): void {
    this.userService.logged.subscribe(user => this.logged = user);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    //In case non logged user triess to acces this component
    if(!this.logged){
      this.router.navigate(['']);
    }else{
      if(this.currentUser.favorites != null || this.currentUser.favorites != undefined){
        if(this.currentUser.favorites.length > 0){
         
          this.postsSource.data = this.userService.getAllFavoritePostsForUser(this.currentUser.id);
        }
    
        
      }
     
    }
    
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
