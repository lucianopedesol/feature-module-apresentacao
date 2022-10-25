import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-courses-new',
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.scss']
})
export class CoursesNewComponent implements OnInit {

  courseForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    this.courseService.save(this.courseForm.value).subscribe(() => {
      this.router.navigateByUrl("/courses");
    });
  }

  private buildForm() {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
