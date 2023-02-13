import {Component, Input, OnInit} from '@angular/core';
import {Students} from "../../shared/modules/students";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() studentTitle : string = ' ';

  @Input() student : Students[] = [];
  ngOnInit(): void {
  }

}
