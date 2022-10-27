import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: Course[] = [];
  public loading: boolean = true;
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  refresh() {
    this.loadCourses();
  }

  private loadCourses() {
    this.loading = true;
    this.courseService.findAll().subscribe({
      next: response => {
        this.courses = response;
      },
      complete: () => {
        this.loading = false
      }
    });
  }

}
