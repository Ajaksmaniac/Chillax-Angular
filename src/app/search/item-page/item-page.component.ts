import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../post.servise';
import { Post } from '../post.model';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private postsService : PostsService) { }
  dataSet = {starSize: 15,
    showLabels: false};
 public post : Post;
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id");
    this.post = this.postsService.getPostById(id);
    //console.log(this.postsSource.data);
    console.log(this.post);
  }
 
  
}
