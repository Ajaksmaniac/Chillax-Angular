import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post.servise';
import { Post } from '../post.model';
import { PostServiceService } from '../post-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {
  defaultElevation = 2;
  raisedElevation = 8;
  constructor(private postService : PostServiceService) { }

  ngOnInit(): void {
  }
  destroy$:Subject<void> = new Subject();
  getNumberOfPlaces(sybtype: string) : Number{
    var count = 0;
    var postList : Array<Post>;
    this.postService.getAllPostBySubType(sybtype).valueChanges().pipe(
    
    ).subscribe(data => count = data.length);
  
    return count;
  }
}
