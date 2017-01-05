/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TuitionFinderComponent } from './tuition-finder.component';

describe('TuitionFinderComponent', () => {
  let component: TuitionFinderComponent;
  let fixture: ComponentFixture<TuitionFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
