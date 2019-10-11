import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'titlePipe'
})

export class TitlePipe implements PipeTransform {
  transform(infoUser: string, params?: any): string {
    if (infoUser) {
      return params + ': ' + infoUser;
    }
  }
}
