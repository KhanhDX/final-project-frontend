import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCourses() {
    return this.httpClient.get<Course[]>('http://localhost:8080/course/view-all-courses');
  }
}
