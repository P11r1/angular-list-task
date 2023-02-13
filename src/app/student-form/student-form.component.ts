import { Component } from '@angular/core';
import {Students} from "../../shared/modules/students";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  students: Students[] = [];

  firstName: string = ' ';
  lastName: string = ' ';

  Age: string = ' ';

  eMail: string = ' ';

  isShowForm: boolean = false;


  addStudent(studentForm: NgForm) {
    this.students.push(new Students(this.firstName, this.lastName, this.Age, this.eMail))
    studentForm.reset();

  }

  showStudentForm() {
    this.isShowForm = true;
  }
}
