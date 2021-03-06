import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl:'./course-list.component.html'
})


export class CourseListComponent implements OnInit{
    
    public filteredCourses: Course [] = [];

    public _courses: Course[] = [];

    public _filterBy: string;

    constructor(private CourseService: CourseService, _filterBy: string){
        this._filterBy = _filterBy;
        this.filteredCourses = this._courses;
     }

    ngOnInit(): void{
        this._courses = this.CourseService.retrieveAll();
        this.filteredCourses = this._courses.filter((course: Course) => Course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) >= -1);
    }

    set filter(value: string){
        this._filterBy = value;
    }

    get filter(){
        return this._filterBy;
    }
}