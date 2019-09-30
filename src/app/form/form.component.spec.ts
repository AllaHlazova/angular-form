import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { FormComponent } from './form.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyValidators} from '../services/my.validators';
import {of} from 'rxjs';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  // let onlyLetters: FormControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatButtonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  //
  // it('should create ListService', inject([ListService], (service: ListService) => {
  //   expect(component).toBeTruthy();
  // }));
  //
  // it('should get info',
  //   inject([ListService],
  //     (service: ListService) => {
  //       const info = [{
  //         title: 'Pasturia',
  //         subTitle: 'Emma Brennan',
  //         date: 1558347089,
  //         daysLeft: 2,
  //         isInfoCard: true
  //       }];
  //
  //       spyOn(service, 'getData').and.returnValue(of(info));
  //       component.ngOnInit();
  //       expect(component.cardList).toEqual(info);
  //     }));



  it('should create', () => {
    const form = new FormGroup({
      fName: new FormControl('111', [Validators.minLength(2), Validators.required]),
      lastName: new FormControl('', [Validators.minLength(3), Validators.required,]),
      address: new FormControl('', [Validators.minLength(8), Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      select: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.forbiddenEmail]),
      toggle: new FormControl('', Validators.required)
    });
    // const fName = 'Bob';
    // const lastName = 'Williams';
    component.myFunc(form.controls.fName);
    component.myFunc(form.controls.lastName);
    component.myFunc(form.controls.address);
    component.myFunc(form.controls.dateOfBirth);
    component.myFunc(form.controls.gender);
    component.myFunc(form.controls.select);
    component.myFunc(form.controls.email);
    component.myFunc(form.controls.toggle);

    const fName = 'Bob';
    const lastName = 'Williams' ;

  });

});
