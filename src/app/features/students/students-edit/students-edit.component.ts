import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { CourseService } from 'src/app/core/services/course.service';
import { StudentService } from 'src/app/core/services/student.service';
import { Course } from 'src/app/shared/models/course';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.scss']
})
export class StudentsEditComponent implements OnInit {

  student!: Student;
  courses: Course[] = [];
  studentForm!: FormGroup;

  constructor(
    private location: Location,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    const { student } = this.activatedRoute.snapshot.data;
    this.student = student;

    this.buildForm();
    this.loadCourses();
  }

  goBack() {
    return this.location.back();
  }

  onSubmit() {
    this.studentService.update(this.student.id, this.studentForm.value).subscribe(() => {
      this.toastr.success('Student updated successfully!');
      this.goBack();
    });
  }

  onDelete() {
    this.studentService.delete(this.student.id).subscribe(() => {
      this.toastr.success('Student deleted successfully!');
      this.goBack();
    });
  }

  private buildForm() {
    this.studentForm = this.formBuilder.group({
      name: [this.student.name, Validators.required],
      email: [this.student.email, Validators.required],
      birthday: [this.student.birthday, Validators.required],
      courseId: [this.student.courseId, Validators.required]
    });
  }

  private loadCourses() {
    this.courseService.findAll().subscribe(response => {
      this.courses = response;
    });
  }

}
