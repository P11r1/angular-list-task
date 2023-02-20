import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentComponent} from "./student.component";
import {StudentFormComponent} from "./student-form/student-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    StudentComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class StudentModule { }
