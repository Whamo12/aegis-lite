import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agl';
  issues = [];
  color: string;

  constructor() { }

  ngOnInit() {}

}
