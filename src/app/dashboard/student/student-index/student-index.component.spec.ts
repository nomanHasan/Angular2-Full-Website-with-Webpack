/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentIndexComponent } from './student-index.component';

describe('StudentIndexComponent', () => {
  let component: StudentIndexComponent;
  let fixture: ComponentFixture<StudentIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
