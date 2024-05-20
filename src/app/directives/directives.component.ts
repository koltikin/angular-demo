import { Component } from '@angular/core';

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
    if(!this.mentors){
    this.mentors = ["Ziya","Alim","Yusuf"];
    this.buttonText = "Hide Mentors";
    } else{
      this.mentors = undefined;
    this.buttonText = "Show Mentors";
    }
  }
}
