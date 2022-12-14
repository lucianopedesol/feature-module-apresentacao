import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseResolver } from './course.resolver';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesNewComponent } from './courses-new/courses-new.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CoursesListComponent
  }, {
    path: 'new',
    component: CoursesNewComponent
  }, {
    path: ':id',
    component: CoursesDetailComponent,
    resolve: {
      course: CourseResolver
    }
  }, {
    path: ':id/edit',
    component: CoursesEditComponent,
    resolve: {
      course: CourseResolver
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
