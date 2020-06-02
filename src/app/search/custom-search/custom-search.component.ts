import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {PostsService} from 'src/app/search/post.servise';
import { MatTableDataSource } from '@angular/material/table';
import {Post} from 'src/app/search/post.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit, AfterViewInit {
  displayedColumns = ["picture","name","date","rating"];
  
  dataSet = {starSize: 20,
    showLabels: false};
  postsSource = new MatTableDataSource<Post>();
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  constructor(private route: ActivatedRoute,private postsService : PostsService, private router : Router) { }
  
  ngOnInit(): void {
    var name = this.route.snapshot.paramMap.get("name");
    this.postsSource.data = this.postsService.getPostsByName(name);
    //console.log(this.postsSource.data);
    console.log(name);
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
