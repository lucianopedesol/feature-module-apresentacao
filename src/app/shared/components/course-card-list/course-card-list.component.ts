import { Component, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent {
  @Input() loading = false;
  @Input() courses!: Course[];

  constructor() { }

  trackByCourseId(index: number, course: Course) {
    return course.id;
  }

}
