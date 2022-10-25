import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/core/services/course.service';

import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.scss']
})
export class CoursesEditComponent implements OnInit {

  course!: Course;
  courseForm!: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    const { course } = this.activatedRoute.snapshot.data;
    this.course = course;

    this.buildForm();
  }

  onSubmit() {
    this.courseService.update(this.course.id, this.courseForm.value).subscribe(() => {
      this.toastr.success('Course updated successfully!');
      this.router.navigateByUrl("/courses");
    });
  }

  onDelete() {
    this.courseService.delete(this.course.id).subscribe(() => {
      this.toastr.success('Course deleted successfully!');
      this.router.navigateByUrl("/courses");
    });
  }

  private buildForm() {
    this.courseForm = this.formBuilder.group({
      name: [this.course.name, Validators.required],
      description: [this.course.description, Validators.required]
    });
  }
}
