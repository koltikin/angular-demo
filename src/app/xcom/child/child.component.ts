import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mentor } from '../../shared/mentor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() selectedC: Mentor |undefined;
  @Output() likeEvent = new EventEmitter();

  onLike(){
    if(this.selectedC){
    this.selectedC.likeCount++;
    }
    this.likeEvent.emit(this.selectedC?.idNum)
  }

}
