import {Pipe, PipeTransform} from '@angular/core';

const Str = 'User: ';

@Pipe({
  name: 'titlePipe'
})

// this pipe added phrase before user`s first-name
export class TitlePipe implements PipeTransform {
  transform(firstName: string, params?: any): string {
    if (firstName) {
      return Str + firstName + params;
    } else {
      console.log('smt went wrong');
    }
  }
}
