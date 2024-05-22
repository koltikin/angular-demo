import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../shared/student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent{

  students: Student[] = [
    new Student(1,'Ziya',60,'assets/images/ziya.png'),
    new Student(2,'Alim',20,'assets/images/alim.png'),
    new Student(3,'Yusuf',18,'assets/images/yusuf.png')
  ];

  selectedStudent: Student;

  constructor(private route: ActivatedRoute, private location: Location){

    let index = Number(this.route.snapshot.paramMap.get('id'))
    this.selectedStudent = this.students[index-1];
  }

  goBack(){
    this.location.back();
  }

}
