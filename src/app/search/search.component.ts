import { Component, OnInit } from '@angular/core';
import {PostsService} from './post.servise';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 /* service : PostsService;
  data = this.service.getAllPosts() ;*/

  
  constructor( private router:Router) { }

  ngOnInit(): void {
    
    
  }
  searchByRelaxationName(form: NgForm) {
    var name = form.value.relaxationName;
    this.router.navigate(['/search', name]);
  }
}
