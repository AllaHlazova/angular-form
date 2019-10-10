import {FormControl} from '@angular/forms';

export class MyValidators {

  static forbiddenEmail(control: FormControl): { [key: string]: boolean } {
    if (['demo@demo.com'].includes(control.value)) {
      return {bannedEmail: true};
    }
    return null;
  }

  static onlyLetters(control: FormControl): { [key: string]: string } {
    if (control.value) {
      if (control.value.match(/^\d+$|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
        return {pattern: ''};
      }
      return null;
    }
  }

}
