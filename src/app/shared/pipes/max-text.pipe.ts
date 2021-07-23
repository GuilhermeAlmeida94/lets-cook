import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxText',
})
export class MaxTextPipe implements PipeTransform {
  transform(value: string, limit: number): any {
    if (value.length > limit + 5) {
      return `${value.substr(0, limit)}...`;
    } else {
      return value;
    }
  }
}
