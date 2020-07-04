import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post.servise';
import { element } from 'protractor';
import { PostServiceService } from '../post-service.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private postService : PostServiceService) { 
   // this.postService.addBookkings();
  }
  defaultElevation = 2;
  raisedElevation = 8;
  ngOnInit(): void {
  }
  getNumberOfPlaces(sybtype: string) : Number{
    var count = 0;
    var postList : Array<Post>;
    this.postService.getAllPostBySubType(sybtype).valueChanges().pipe().subscribe(data => count = data.length);
  
    return count;
  }
}
