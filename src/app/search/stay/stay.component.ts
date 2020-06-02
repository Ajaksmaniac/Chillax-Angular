import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {
  defaultElevation = 2;
  raisedElevation = 8;
  constructor() { }

  ngOnInit(): void {
  }

}
