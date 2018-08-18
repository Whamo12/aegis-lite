import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'agl-issue-summary',
  templateUrl: './issue-summary.component.html',
  styleUrls: ['./issue-summary.component.css']
})
export class IssueSummaryComponent implements OnInit {
  issues = [];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.appService.retrieveAllIssues().subscribe(res => {
      this.issues = res;
    });
  }

  createIssue() {
    this.router.navigateByUrl('create-issue');
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
