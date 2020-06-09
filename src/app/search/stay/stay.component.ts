import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post.servise';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {
  defaultElevation = 2;
  raisedElevation = 8;
  constructor(private postService : PostsService) { }

  ngOnInit(): void {
  }
  getNumberOfPlaces(sybtype: string) : Number{
    var count = 0;
    this.postService.posts.forEach(element =>{
      if(element.subtype == sybtype){
        count++;
      }
      
    })
    return count;
  }
}
