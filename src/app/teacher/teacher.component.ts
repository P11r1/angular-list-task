import {Component, Input, OnInit} from '@angular/core';
import {Teachers} from "../../shared/modules/teachers";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacherTitle : string = '';

  @Input() teacher : Teachers[] = [];


  ngOnInit(): void {
  }

}
