import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  mentors: Mentor[] = [
    new Mentor(1,'Ziya',16),
    new Mentor(2,'Alim',23),
    new Mentor(3,'Yusuf',30)
  ]

  constructor() { }
}
