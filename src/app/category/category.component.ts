import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  title: string = 'this title come from TS file';
  age: number = 33;
  isDiabled1: boolean = false;
  isDiabled2: boolean = false;

  onClick1(event:Event){
    this.isDiabled2 = true
    this.title = 'Button1 clicked button2 disabled'}

  onClick2(event:Event){
    if (this.isDiabled1 === false){
      this.isDiabled1 = true;
      this.title = 'Button2 clicked button1 disabled'
    } else{
    this.isDiabled1 = false;
    this.title = 'Button2 clicked button1 enabled'}
    }

  
    mouseHover(){
    this.title = 'mouse Hovered'
  }
  // -------- old two way bidding ---------
  message:string = "enter something"
  onSubmit(value:string){
    this.title = value;

  }

  // ------------ new two way biding ----------

  anyString: string ='enter something';

  // elemet reference

  @ViewChild('h3ref') ref?: ElementRef;
  refrenceMothod(){
    console.log(this.ref)
  }

}
