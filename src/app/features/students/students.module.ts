import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsNewComponent } from './students-new/students-new.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentsNewComponent,
    StudentsEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
