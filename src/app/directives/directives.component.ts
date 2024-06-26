import { Component } from '@angular/core';
import { Mentor } from '../shared/mentor';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  disabled: boolean = true;

  onClick(){
    this.disabled = !this.disabled;
  }
  mentors: string[] |undefined;

  buttonText: string = "Show Mentors";
  showMentor(){
    this.Imentors[0].likeCount++;
    if(!this.mentors){
    this.mentors = ["Ziya","Alim","Yusuf"];
    this.buttonText = "Hide Mentors";
    } else{
      this.mentors = undefined;
    this.buttonText = "Show Mentors";
    }
  }

  myMentors: Mentor[] = [
    new Mentor(1,'Ziya',66),
    new Mentor(2,'Alim',25),
    new Mentor(3,'Yusuf',13),
    new Mentor(4,'Seyfullah',45)
  ];

  Imentors: IMentor[] = [
    {name: 'Muhammd', likeCount: 5},
    {name: 'Safiye', likeCount: 4},
    {name: 'Seyfullah', likeCount: 3}
  ]
}

interface IMentor{
  name:string;
  likeCount:number;
}

