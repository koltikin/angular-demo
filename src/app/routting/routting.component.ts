import { Component } from '@angular/core';
import { Student } from '../shared/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routting',
  templateUrl: './routting.component.html',
  styleUrl: './routting.component.css'
})
export class RouttingComponent {

  students: Student[] = [
    new Student(1,'Ziya',60,'assets/images/ziya.png'),
    new Student(2,'Alim',20,'assets/images/alim.png'),
    new Student(3,'Yusuf',18,'assets/images/yusuf.png')
  ];

  constructor(private router: Router) {}

  sendStudent() {
    this.router.navigate(['/details'], { state: this.students  });
  }

}
