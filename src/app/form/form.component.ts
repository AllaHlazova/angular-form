import {Component, OnInit} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.minLength(2), Validators.required]),
    lastName: new FormControl('', [Validators.minLength(3), Validators.required]),
    address: new FormControl('', [Validators.minLength(5), Validators.required]),
    date:  new FormControl('', [Validators.minLength(5), Validators.required])
  });

  // public nameControl: FormControl;

  constructor(public dialog: MatDialog, public router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result);
    });
  }

  // redirect to first router
  cancel() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.nameControl = new FormControl('john');
    firstName.

    // function myValidator(formControl: FormControl) {
    //   if (formControl.value.lenght < 3) {
    //     return {myValidator: { message: "rqwqeq" }};
    //   } else {
    //     return null;
    //   }
    // }
  }

}

