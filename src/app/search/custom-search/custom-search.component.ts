import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {PostsService} from 'src/app/search/post.servise';
import { MatTableDataSource } from '@angular/material/table';
import {Post} from 'src/app/search/post.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostServiceService } from '../post-service.service';

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
  constructor(private route: ActivatedRoute,private postsService : PostServiceService, private router : Router) { }
  destroy$:Subject<void> = new Subject();
  ngOnInit(): void {
    var name = this.route.snapshot.paramMap.get("name");
    this.postsService.getPostsByName(name).valueChanges().pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.postsSource.data = data);
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
