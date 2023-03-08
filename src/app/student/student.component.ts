import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Students} from "../../shared/models/students";
import {MatTable} from "@angular/material/table";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Students[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'email'];

  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<Students>;


  studentNames: string[] = ["Mark", "Mike", "Clark", "Ringo", "Jay", "Joe", "Roland", "Kent"];
  studentLastNames: string[] = ["Musk", "Suva", "Buffet", "Roosaare", "Fallon", "Harper", "Kim", "Lee"];
  studentAge: string[] = ["55", "45", "21", "60", "30", "35", "27", "42"]
  studentEmail: string[] = ["mm@gmail.com", "kl@gmail.com", "zx@gmail.com", "qw@gmail.com", "br@gmail.com", "lr@gmail.com", "fj@gmail.com", "jh@gmail.com"]

  addStudent(): Students[] {

    let student: Students[] = [];

    let studentName = this.studentNames.at(Math.floor(Math.random() * this.student.length));
    let studentLastName = this.studentLastNames.at(Math.floor(Math.random() * this.student.length));
    let studentAges = this.studentAge.at(Math.floor(Math.random() * this.student.length));
    let studentEmails = this.studentEmail.at(Math.floor(Math.random() * this.student.length));

    // @ts-ignore
    this.student.push(new Students(studentName, studentLastName, studentAges, studentEmails));
    this.table.renderRows();
    return student;
  }
  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * this.student.length);
  //   this.student.push(this.student[randomElementIndex]);
  //   this.table.renderRows();
  // }

  removeData() {
    this.student.pop();
    this.table.renderRows();
  }

  ngOnInit(): void {
    this.student = this.fetchStudents()
  }

  fetchStudents(): Students[] {

    let student: Students[] = [];


    student.push(new Students("Will", "Smith", "50", "ws@gmail.com"));


    return student;
  }

}
