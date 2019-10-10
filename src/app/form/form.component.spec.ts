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

  it('should create component', () => {
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

  it('should return empty error value', () => {
    const a = new FormControl('12345678901', [Validators.maxLength(10)]);
    a.markAsDirty();
    a.markAsTouched();
    a.updateValueAndValidity();
    const result = component.myFunc(a);
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

  it('should check FormControl on forbidden email', () => {
    const a = new FormControl('demo@demo.com', [MyValidators.forbiddenEmail]);
    a.markAsDirty();
    a.markAsTouched();
    a.updateValueAndValidity();
    const result = component.myFunc(a);
    expect(result).toEqual(`The email ${a.value} banned`);
  });

  it('should check FormControl is email', () => {
    const a = new FormControl('eererer', [Validators.email]);
    a.markAsDirty();
    a.markAsTouched();
    a.updateValueAndValidity();
    const result = component.myFunc(a);
    expect(result).toEqual('Enter correct email');
  });

  it('should create form', () => {
    component.ngOnInit();

    component.form.markAsDirty();
    component.form.markAsTouched();
    component.form.updateValueAndValidity();
    // check form on valid
    expect(component.form.valid).toBeFalsy();
    // fill in form field
    component.form.controls.firstName.setValue('John');
    component.form.controls.lastName.setValue('Williams');
    component.form.controls.address.setValue('21 Mercer St, New York, NY 10013, US');
    component.form.controls.dateOfBirth.setValue('10/1/1989');
    component.form.controls.gender.setValue('male');
    component.form.controls.select.setValue('option1');
    component.form.controls.email.setValue('john@mail.com');
    component.form.controls.toggle.setValue(true);
    // check valid
    expect(component.form.controls.firstName.valid).toBeTruthy();
    expect(component.form.controls.lastName.valid).toBeTruthy();
    expect(component.form.controls.address.valid).toBeTruthy();
    expect(component.form.controls.dateOfBirth.valid).toBeTruthy();
    expect(component.form.controls.gender.valid).toBeTruthy();
    expect(component.form.controls.select.valid).toBeTruthy();
    expect(component.form.controls.email.valid).toBeTruthy();
    expect(component.form.controls.toggle.valid).toBeTruthy();
    // call method submit
    component.submit();
    // check form field - they must be empty
    expect(component.form.controls.firstName.value).toEqual(null);
    expect(component.form.controls.lastName.value).toEqual(null);
    expect(component.form.controls.address.value).toEqual(null);
    expect(component.form.controls.dateOfBirth.value).toEqual(null);
    expect(component.form.controls.gender.value).toEqual(null);
    expect(component.form.controls.select.value).toEqual(null);
    expect(component.form.controls.email.value).toEqual(null);
    expect(component.form.controls.toggle.value).toEqual(null);
  });
});
