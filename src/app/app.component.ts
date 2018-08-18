import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'agl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agl';
  issues = [];
  color: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.retrieveAllIssues().subscribe(res => {
      this.issues = res;
    });
  }

  styleObject(severity: string): Object {
    if (severity.toLowerCase() === 'critical') {
      return { 'color': 'red ' };
    }
    if (severity.toLowerCase() === 'high') {
      return { 'color': 'darkred ' };
    }
    if (severity.toLowerCase() === 'medium') {
      return { 'color': 'orange ' };
    }
    if (severity.toLowerCase() === 'low') {
      return { 'color': 'darkgreen' };
    }
    if (severity.toLowerCase() === 'lowest') {
      return { 'color': 'green' };
    }
  }
}
