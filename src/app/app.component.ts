import {Component, OnInit} from '@angular/core';
import {Teachers} from "../shared/models/teachers";
import {Students} from "../shared/models/students";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  title = 'Angular-list-task';

}
