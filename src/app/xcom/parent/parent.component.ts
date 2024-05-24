import { Component } from '@angular/core';
import { Mentor } from '../../shared/mentor';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  mentors: Mentor[] = [
    new Mentor(1,'Ziya',66),
    new Mentor(2,'Alim',25),
    new Mentor(3,'Yusuf',13),
    new Mentor(4,'Seyfullah',45)
  ];

  selectedP: Mentor |undefined;

  onSelected(mentor: Mentor){
    this.selectedP = mentor;
    console.log(this.selectedP.name);
  }

}
