import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog',

  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public router: Router) {
  }

  ngOnInit() {
  }

  // redirect to first router
  //   this.router.navigate(['']);
  out() {
    this.router.navigate(['']);
    this.dialogRef.close('form closed user`s');
  }

  continue() {
    this.dialogRef.close('user continue write form');
  }
}
