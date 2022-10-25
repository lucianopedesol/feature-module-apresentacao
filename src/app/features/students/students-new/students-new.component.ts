import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';
import { StudentService } from 'src/app/core/services/student.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-students-new',
  templateUrl: './students-new.component.html',
  styleUrls: ['./students-new.component.scss']
})
export class StudentsNewComponent implements OnInit {

  courses: Course[] = [];
  studentForm!: FormGroup;

  cid?: number;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    const { cid } = this.activatedRoute.snapshot.queryParams;

    if (!isNaN(cid)) {
      this.cid = parseInt(cid);
    }

    this.buildForm();
    this.loadCourses();
  }

  get redirectUrl(): string {
    return this.cid ? `/courses/${this.cid}` : "/students";
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService.save(this.studentForm.value).subscribe(() => {
        this.router.navigateByUrl(this.redirectUrl);
      });
    }
  }

  private buildForm() {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      courseId: [this.cid || '', Validators.required]
    });
  }

  private loadCourses() {
    this.courseService.findAll().subscribe(response => {
      this.courses = response;
    });
  }

}
