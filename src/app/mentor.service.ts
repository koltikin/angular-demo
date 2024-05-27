import { Injectable, OnInit } from '@angular/core';
import { Mentor } from './shared/mentor';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, filter, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  mentors: Mentor[] = [];
  selectedMentor$: BehaviorSubject<Mentor> = new BehaviorSubject<Mentor>(this.mentors[0]);

  baseUrl: string = 'http://localhost:8080/api/v1/mentors';

  constructor(private http: HttpClient) {}

  fetchMentor$(): Observable<Mentor[]> {
    return this.http.get<ResponseType>(this.baseUrl).pipe(
      map(response => response.data),
      map((data: Mentor[]) => data.filter(mentor => mentor.id > 1))
    );
  }

  liked(selected: Mentor): void {
    selected.likeCount++;
  }

  onSelectMentor(selectedMentor: Mentor): void {
    let index = this.mentors.findIndex(mentor => mentor.id === selectedMentor.id);
    if (index !== -1) {
      this.selectedMentor$.next(this.mentors[index]);
    }
  }
}

interface ResponseType {
  success: boolean;
  message: string;
  data: Mentor[];
  code: number;
}