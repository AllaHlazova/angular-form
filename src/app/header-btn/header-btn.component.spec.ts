import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderBtnComponent} from './header-btn.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatCardModule} from '@angular/material';

describe('HeaderBtnComponent', () => {
  let component: HeaderBtnComponent;
  let fixture: ComponentFixture<HeaderBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBtnComponent],
      imports: [
        RouterTestingModule,
        MatCardModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
