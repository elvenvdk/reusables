import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives1',
  templateUrl: './directives1.component.html',
  styleUrls: ['./directives1.component.css']
})
export class Directives1Component {
  viewMode = 'something else';
  // courses = [
  //   { id: 1, name: 'course1' },
  //   { id: 2, name: 'course2' },
  //   { id: 3, name: 'course3' },
  //   { id: 4, name: 'course4' }
  // ];

  courses;

  onAdd() {
    this.courses.push({ id: 5, name: 'course5' });
  }

  onChange(course) {
    course.name = 'Updated';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
      { id: 4, name: 'course4' }
    ];
  }

  trackCourse(idx, course) {
    return course ? course.id : undefined;
  }
}
