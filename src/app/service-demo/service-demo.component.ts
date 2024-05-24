import { Component, OnInit } from '@angular/core';
import { Mentor } from '../shared/mentor';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css'
})
export class ServiceDemoComponent implements OnInit {

  mentors: Mentor[] = [];
  constructor(private service: MentorService){}

  ngOnInit(): void {
    this.mentors = this.service.mentors;
  }

}
