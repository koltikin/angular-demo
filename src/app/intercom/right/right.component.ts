import { Component, OnInit } from '@angular/core';
import { Mentor } from '../../shared/mentor';
import { ServiceDemoComponent } from '../../service-demo/service-demo.component';
import { MentorService } from '../../mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent implements OnInit {
  selectedMentor: Mentor | null = null;

  constructor(private mentorService: MentorService, private router: Router) {}

  ngOnInit(): void {
    this.mentorService.selectedMentor$.subscribe(data => {
      this.selectedMentor = data;
    });
  }

  onLikeMentor(selected: Mentor): void {
    this.mentorService.liked(selected);
    // this.router.navigate(['left'])
  }
}
