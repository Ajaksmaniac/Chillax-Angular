import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post.servise';
import { element } from 'protractor';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private postService : PostsService) { }
  defaultElevation = 2;
  raisedElevation = 8;
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
