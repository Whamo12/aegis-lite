import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'agl-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  issueForm: FormGroup;
  submitted: Boolean = false;
  alertType: string;
  alertMessage: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  createForm() {
    // TODO: Build form!
  }

}
