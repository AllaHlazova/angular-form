import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(public router: Router) {}

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.minLength(6), Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });
  }

  CheckError(control: AbstractControl): string {
    let errorText = '';
    for (const value in control.errors) {
      switch (value) {
        case 'minlength':
          errorText = `Expected length more ${control.errors.minlength.requiredLength} characters`;
          break;
        case 'required':
          errorText = 'You must fill in the field';
          break;
        case 'email':
          errorText = `Enter correct email`;
          break;
      }
    }
    return errorText;
  }

  login() {
    this.formLogin.markAsDirty();
    this.formLogin.markAllAsTouched();
    this.formLogin.updateValueAndValidity();

    if (this.formLogin.invalid) {
      return;
    } else {
      const uuid1 = uuid.v4();
      localStorage.setItem('id', uuid1);
      this.router.navigate(['/form']);
    }
  }
}
