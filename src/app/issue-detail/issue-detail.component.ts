import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue-form';
import { AppService } from '../app.service';

@Component({
  selector: 'agl-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  issueModel: Issue;
  issueForm: FormGroup;
  submitted: Boolean = false;
  alertType: string;
  alertMessage: string;

  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.issueForm = this.fb.group({
      fields: this.fb.group({
        project: this.fb.group({
          key: ['', Validators.required]
        })
      }),
      summary: ['', Validators.required],
      description: ['', Validators. required],
      issueType: this.fb.group({
        name: ['', Validators.required]
      })
    });
  }

  onSubmit(form: FormGroup) {
    this.appService.createIssue(form).subscribe(success => {
      console.log(success);
    });

  }

}
