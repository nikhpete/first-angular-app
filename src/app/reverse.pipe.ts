import { Pipe, PipeTransform } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let newCharArray = value.split('');
    value = '';
    for (let i = newCharArray.length - 1; i >= 0; --i) {
      value += newCharArray[i];
    }
    if (args[0]) {
      value += '.';
    }
    if (args[1] === 'single') {
      value = "'" + value + "'";
    } else if (args[1] === 'double') {
      value = '"' + value + '"';
    }
    return value;
  }
}
