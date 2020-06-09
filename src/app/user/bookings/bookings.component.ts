import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserServiceModule, User, booking } from 'src/app/auth/user-service.module';
import {PostsService} from 'src/app/search/post.servise';
import { MatTableDataSource } from '@angular/material/table';
import {Post} from 'src/app/search/post.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


import { Router } from '@angular/router';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  logged : boolean = false;
  currentUser : User = null;
//bookings : booking
  constructor(private userService: UserServiceModule, private router : Router,private postsService : PostsService) { }

  displayedColumns = ["name","date","price", "active","rating"];

  dataSet = {
    starSize: 20,
    showLabels: false
  };

  //if Current user has any bookings
  

  postsSource = new MatTableDataSource<booking>();
  
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  ngOnInit(): void {
    this.userService.logged.subscribe(user => this.logged = user);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    //In case non logged user tries to acces this component
    if(!this.logged){
      this.router.navigate(['']);
    }else{
      if(this.currentUser.bookings != null || this.currentUser.bookings != undefined){
        if(this.currentUser.bookings.length > 0){
          this.postsSource.data = this.userService.getAllBookingForUser(this.currentUser.id);
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
