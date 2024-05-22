import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouttingComponent } from './routting.component';

describe('RouttingComponent', () => {
  let component: RouttingComponent;
  let fixture: ComponentFixture<RouttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouttingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
