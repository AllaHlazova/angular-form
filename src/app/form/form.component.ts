import {Component, OnInit} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MyValidators} from '../services/my.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) {
  }

  public form: FormGroup;

  // dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.form.reset();
      }
      console.log(result);
    });
  }

  ngOnInit() {

    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.minLength(2),
        Validators.required, MyValidators.onlyLetters]),
      lastName: new FormControl('', [Validators.minLength(3),
        Validators.required, MyValidators.onlyLetters]),
      address: new FormControl('', [Validators.minLength(8), Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      select: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required,
        MyValidators.forbiddenEmail]),
      toggle: new FormControl('', Validators.required)
    });
  }


  myFunc(control: AbstractControl): string {
    let errorText = '';
    for (const value in control.errors) {
      switch (value) {
        case 'minlength':
          errorText = `Expected length more ${control.errors.minlength.requiredLength}`;
          break;
        case 'required':
          errorText = 'You must fill in the field';
          break;
        case 'pattern':
          errorText = `You must use only letters and do not use specific symbols`;
          break;
        case 'email':
          errorText = `Enter correct email`;
          break;
        case 'bannedEmail':
          errorText = `The email ${control.value} banned`;
          break;
      }
    }
    return errorText;
  }

  submit() {
    this.form.markAsDirty();
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid) {
      return;
    } else {
      // Clear all form
      this.form.reset();
    }
  }
}



