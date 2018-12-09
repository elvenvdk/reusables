import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// FORMS USING FORM BUILDER
@Component({
  selector: 'app-new-course-form2',
  templateUrl: './new-course-form2.component.html',
  styleUrls: ['./new-course-form2.component.css']
})
export class NewCourseForm2Component implements OnInit {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  ngOnInit() {}
}
