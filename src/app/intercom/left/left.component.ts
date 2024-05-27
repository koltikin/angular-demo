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
  mentors: Mentor[] = [];

  constructor(private mentorService: MentorService, private router: Router) {}

  ngOnInit(): void {
    this.mentorService.fetchMentor$().subscribe({
      next: (data) => {
        this.mentors = data;
        this.mentorService.mentors = data;
        if (this.mentors.length > 0) {
          this.onSelectMentor(this.mentors[0]);
        }
      },
      error: (error) => console.log(error),
      complete: () => console.log('completed')
    });
  }

  onSelectMentor(mentor: Mentor): void {
    this.mentorService.onSelectMentor(mentor);
    console.log(mentor.name);
    // this.router.navigate(['right']);
  }
}