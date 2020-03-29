import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../service/manage course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses:Course[];

  constructor(
    private courseService:CourseService
  ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response)
  {
      this.courses=response;
  }

}
