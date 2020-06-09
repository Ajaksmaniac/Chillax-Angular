import { Component, OnInit, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import {PostsService} from 'src/app/search/post.servise';
import { MatTableDataSource } from '@angular/material/table';
import {Post} from 'src/app/search/post.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserServiceModule, User } from 'src/app/auth/user-service.module';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit, AfterViewInit {
  displayedColumns = ["picture","name",  "status", "price", "date","rating"];
  dataSet = {starSize: 20,
    showLabels: false};
    logged : boolean = false;
    currentUser : User = null;
    
  postsSource = new MatTableDataSource<Post>();
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  constructor(private postsService : PostsService, private router : Router,private userService: UserServiceModule) {

   }
 

  ngOnInit(): void {
    
    //console.log(this.postsSource.data);
    this.userService.logged.subscribe(user => this.logged = user);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.postsSource.data = this.postsService.getAllPostByInterestsAndLocation(this.currentUser.likes,this.currentUser.location);
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
