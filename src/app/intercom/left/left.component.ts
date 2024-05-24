import { Component, OnInit } from '@angular/core';
import { Mentor } from '../../shared/mentor';
import { MentorService } from '../../mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent implements OnInit {
  mentors:Mentor[] = [];

  constructor(private mentorService: MentorService, private router: Router){}

  ngOnInit(): void {
    this.mentors = this.mentorService.mentors;
  }

  onSelectMentor(mentor: Mentor){
    console.log(mentor.name);
    this.router.navigate(['right']);
  }

}
