import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'javascript'
})
export class JavascriptPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
