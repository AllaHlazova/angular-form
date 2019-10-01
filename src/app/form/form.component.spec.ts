import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormComponent} from './form.component';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
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

  it('should check function to onlyLetters validator', () => {
    const a = new FormControl('1111', [MyValidators.onlyLetters]);
    const result = component.myFunc(a);
    expect(result).toEqual('You must use only letters and do not use specific symbols');
  });

  it('should check FormControl is required', () => {
    const a = new FormControl('', [Validators.required]);
    a.markAsDirty();
    a.markAsTouched();
    a.updateValueAndValidity();
    const result = component.myFunc(a);
    expect(result).toEqual('You must fill in the field');
  });
// придет ошибка, пустая.это верно, потому что у нас нет такой ошибки в функции среди других ошибок(value).
  it('should return empty error value', () => {
    const a = new FormControl('12345678901', [Validators.maxLength(10)]);
    a.markAsDirty();
    a.markAsTouched();
    a.updateValueAndValidity();
    const result = component.myFunc(a);
    console.log(a.errors);
    expect(result).toEqual('');
  });

  it('should check FormControl on minLength', () => {
    const a = new FormControl('t', [Validators.minLength(3)]);
    const result = component.myFunc(a);
    a.markAsDirty();
    a.markAsTouched();
    a.updateValueAndValidity();
    const valueUser = a.errors.minlength.requiredLength;
    expect(result).toEqual(`Expected length more ${valueUser}`);
  });

  it('should check FormControl on minLength', () => {
    const a = new FormControl('t', [Validators.minLength(3)]);
    const result = component.myFunc(a);


    a.markAsDirty();
    a.markAsTouched();
    a.updateValueAndValidity();


    const valueUser = a.errors.minlength.requiredLength;
    expect(result).toEqual(`Expected length more ${valueUser}`);
  });



});
