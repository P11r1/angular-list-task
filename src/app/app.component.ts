import { Component } from '@angular/core';
import {Teachers} from "../shared/modules/teachers";
import {Students} from "../shared/modules/students";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-list-task';


  teacher: Teachers[] = [];

  teacherNames: string[] = ["Marko", "John", "Bruno", "Jim"];
  teacherLastNames: string[] = ["Piir", "Smith", "Musk", "Branson"];
  teacherAge: string[] = ["20", "22", "23", "65"]
  teacherEmail: string[] = ["js@gmail.com", "mp@gmail.com", "bm@gmail.com", "jb@gmail.com"]

  fetchTeachers(): Teachers[] {
    let teacher: Teachers[] = [];

    teacher.push(new Teachers("John", "Smith", "30", "js@gmail.com"));


    return teacher;
  }

  alertBox() {
    alert("wss")
  }

  addTeacher() {
    let teacherName = this.teacherNames.at(Math.floor(Math.random() * this.teacher.length));
    let teacherLastName = this.teacherLastNames.at(Math.floor(Math.random() * this.teacher.length));
    let teacherAges = this.teacherAge.at(Math.floor(Math.random() * this.teacher.length));
    let teacherEmails = this.teacherEmail.at(Math.floor(Math.random() * this.teacher.length));

    // @ts-ignore
    this.teacher.push(new Teachers(teacherName, teacherLastName, teacherAges, teacherEmails));
  }

  student: Students[] = [];

  studentNames: string[] = ["Mark", "Mike", "Clark", "Ringo"];
  studentLastNames: string[] = ["Musk", "Suva", "Buffet", "Roosaare"];
  studentAge: string[] = ["55", "45", "21", "60"]
  studentEmail: string[] = ["mm@gmail.com", "kl@gmail.com", "zx@gmail.com", "qw@gmail.com"]

  addStudent() {
    let studentName = this.studentNames.at(Math.floor(Math.random() * this.teacher.length));
    let studentLastName = this.studentLastNames.at(Math.floor(Math.random() * this.teacher.length));
    let studentAges = this.studentAge.at(Math.floor(Math.random() * this.teacher.length));
    let studentEmails = this.studentEmail.at(Math.floor(Math.random() * this.teacher.length));

    // @ts-ignore
    this.teacher.push(new Teachers(teacherName, teacherLastName, teacherAges, teacherEmails));
  }


}
