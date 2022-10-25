import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesNewComponent } from './courses-new/courses-new.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesNewComponent,
    CoursesEditComponent,
    CoursesDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,

    SharedModule
  ]
})
export class CoursesModule { }
