import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {TeacherModule} from "./teacher/teacher.module";
import {StudentModule} from "./student/student.module";
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'create-teacher',
    component: TeacherFormComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'create-student',
    component: StudentFormComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    TeacherModule,
    StudentModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
