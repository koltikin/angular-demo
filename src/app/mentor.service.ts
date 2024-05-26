import { Injectable, OnInit } from '@angular/core';
import { Mentor } from './shared/mentor';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService implements OnInit {
  mentors: Mentor[] = [];

  selectedMentor: Mentor = this.mentors[0];

  baseUrl: string = 'http://localhost:8080/api/v1/mentors';

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.fetchMentor$();
  }

  fetchMentor$() {
    this.http.get<ResponseType>(this.baseUrl).pipe(
      map(response => response.data),
      map((data: Mentor[]) => data.filter(mentor => mentor.id > 1))
    ).subscribe(
      {
        next: (data)=> this.mentors = data,
        error: (error) => console.log(error),
        complete: () => console.log("completed")
      }
    );
  }
  


  liked(selecged: Mentor){
    selecged.likeCount++;
  }

}

interface ResponseType{
  success: boolean,
  message: string,
  data: Mentor[],
  code: number
}
