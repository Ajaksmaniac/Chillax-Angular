import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {PostsService} from 'src/app/search/post.servise';
import { MatTableDataSource } from '@angular/material/table';
import {Post} from 'src/app/search/post.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, AfterViewInit {
  displayedColumns = ["picture","name","date","rating"];
  dataSet = {starSize: 20,
    showLabels: false};
  postsSource = new MatTableDataSource<Post>();
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  constructor(private postsService : PostsService, private router : Router) { }
  
  ngOnInit(): void {
    this.postsSource.data = this.postsService.getAllPostBySubType('restaurant');
    console.log(this.postsSource.data);
  }
 
  
  ngAfterViewInit(){
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