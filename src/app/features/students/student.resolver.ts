import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/shared/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentResolver implements Resolve<Student | null> {

  constructor(
    private router: Router,
    private studentService: StudentService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Student | null> {
    const id = route.paramMap.get('id')!;

    if (isNaN(+id)) {
      this.navigateToStudentsUrl();
      return of(null);
    }

    return this.studentService.findById(+id!).pipe(
      catchError(() => {
        this.navigateToStudentsUrl();
        return of(null);
      })
    );
  }

  private navigateToStudentsUrl() {
    this.router.navigateByUrl("/students");
  }

}
