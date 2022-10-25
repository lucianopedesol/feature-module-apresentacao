import { Component, OnInit } from '@angular/core';

import { differenceInYears, parseISO } from 'date-fns';

import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  refresh() {
    this.loadStudents();
  }

  studentShortName(student: Student) {
    const names = student.name.split(' ');
    return names.length > 1 ? `${names.shift()} ${names.pop()}` : student.name;
  }

  studentAge(student: Student, suffix?: string) {
    const age = differenceInYears(Date.now(), parseISO(student.birthday));
    return suffix ? `${age} ${suffix}` : age;
  }

  private loadStudents() {
    this.studentService.findAll().subscribe(response => {
      this.students = response;
    });
  }

}
