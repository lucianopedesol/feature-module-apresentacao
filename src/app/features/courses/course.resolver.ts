import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<Course | null>{

  constructor(
    private router: Router,
    private courseService: CourseService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course | null> {
    const id = route.paramMap.get('id')!;

    if (isNaN(+id)) {
      this.navigateToCoursesUrl();
      return of(null);
    }

    return this.courseService.findById(+id!).pipe(
      catchError(() => {
        this.navigateToCoursesUrl();
        return of(null);
      })
    );
  }

  private navigateToCoursesUrl() {
    this.router.navigateByUrl("/courses");
  }
}
