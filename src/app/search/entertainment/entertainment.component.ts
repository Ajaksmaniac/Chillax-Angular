import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor() { }
  defaultElevation = 2;
  raisedElevation = 8;
  ngOnInit(): void {
  }

}
