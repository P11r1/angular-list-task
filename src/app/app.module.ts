import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {TeacherModule} from "./teacher/teacher.module";
import {StudentModule} from "./student/student.module";
import {RouterModule, Routes} from "@angular/router";
import { CreateSchoolComponent } from './school/school/create-school/create-school.component';
import { DashboardComponent } from './school/school/dashboard/dashboard.component';
import { UpdateSchoolComponent } from './school/school/update-school/update-school.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SchoolModule} from "./school/school/school.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppInterceptor } from 'src/shared/interceptor/app.interceptor';


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
  },
  {
    path: 'school',
    component: DashboardComponent
  },
  {
    path: 'create-school',
    component: CreateSchoolComponent
  },
  {
    path: 'update-school',
    component: UpdateSchoolComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CreateSchoolComponent,
    DashboardComponent,
    UpdateSchoolComponent,
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
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatToolbarModule,
    SchoolModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
