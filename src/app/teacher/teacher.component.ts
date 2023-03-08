import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Teachers} from "../../shared/models/teachers";
import {MatTable} from "@angular/material/table";
import {Students} from "../../shared/models/students";


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacher: Teachers[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'email'];



  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<Teachers>;

  teacherNames: string[] = ["Marko", "John", "Bruno", "Jim", "Mia", "Brandon", "Lenna", "Noah"];
  teacherLastNames: string[] = ["Piir", "Smith", "Musk", "Branson", "Johnson", "Martinez", "Cooper", "Davis"];
  teacherAge: string[] = ["20", "22", "23", "65", "32", "46", "30", "71"]
  teacherEmail: string[] = ["js@gmail.com", "mp@gmail.com", "bm@gmail.com", "jb@gmail.com", "nc@gmail.com", "bj@gmail.com", "ni@gmail.com", "mk@gmail.com"]

  addTeacher(): Teachers[] {

    let teacher: Teachers[] = [];

    let teacherName = this.teacherNames.at(Math.floor(Math.random() * this.teacher.length));
    let teacherLastName = this.teacherLastNames.at(Math.floor(Math.random() * this.teacher.length));
    let teacherAges = this.teacherAge.at(Math.floor(Math.random() * this.teacher.length));
    let teacherEmails = this.teacherEmail.at(Math.floor(Math.random() * this.teacher.length));

    // @ts-ignore
    this.teacher.push(new Students(teacherName, teacherLastName, teacherAges, teacherEmails));
    this.table.renderRows();
    return teacher;
  }
  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * this.teacher.length);
  //   this.teacher.push(this.teacher[randomElementIndex]);
  //   this.table.renderRows();
  // }

  removeData() {
    this.teacher.pop();
    this.table.renderRows();
  }


  ngOnInit(): void {
    this.teacher = this.fetchTeachers()
  }

  fetchTeachers(): Teachers[] {

    let teacher: Teachers[] = [];

    teacher.push(new Teachers("Peter", "Griffin", "11", "pg@gmail.com"));


    return teacher;
  }

}
