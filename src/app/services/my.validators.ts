import {FormControl} from '@angular/forms';

export class MyValidators {

  static forbiddenEmail(control: FormControl): { [key: string]: boolean} {
    if (['demo@demo.com'].includes(control.value)) {
      return { bannedEmail: true};
    }
    return null;
  }
}
// control.value.match pater
