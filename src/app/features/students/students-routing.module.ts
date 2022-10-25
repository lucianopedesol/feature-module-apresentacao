import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentResolver } from './student.resolver';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsNewComponent } from './students-new/students-new.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudentsListComponent
  }, {
    path: 'new',
    component: StudentsNewComponent
  }, {
    path: ':id/edit',
    component: StudentsEditComponent,
    resolve: {
      student: StudentResolver
    }
  }, {
    path: '**',
    redirectTo: '/students'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
