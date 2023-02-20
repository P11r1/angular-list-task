import {Component, OnInit, ViewChild} from '@angular/core';
import {Teachers} from "../../../shared/modules/teachers";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit{

  teacher: Teachers[] = [];
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  email: string = '';

  isShowForm: boolean = false;

  addTeacher(teacherForm: NgForm) {
    this.teacher.push(new Teachers(this.firstName, this.lastName, this.age, this.email))
    teacherForm.reset();
  }

  showTeacherForm() {
    this.isShowForm = true;
  }



  ngOnInit(): void {
  }


}
