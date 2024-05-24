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

  selectedMentor: Mentor | undefined;

  constructor(private mentorService: MentorService, private router:Router){}

  ngOnInit(): void {
    this.selectedMentor = this.mentorService.selectedMentor
    }

  onLikeMentor(selecged: Mentor){
    this.mentorService.liked(selecged);
    // selecged.likeCount++; // it is also passiable
    this.router.navigate(['left'])
  }

}
