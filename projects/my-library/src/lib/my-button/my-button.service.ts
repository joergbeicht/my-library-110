import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import concat from 'lodash.concat';

@Injectable({
  providedIn: 'root'
})
export class MyButtonService {

  constructor(private datePipe: DatePipe) { }

  getGreeting() {

    const newDate = new Date();
    const pipe = this.datePipe.transform(
      newDate,
      'dd MMM yyyy : hh:mm:ss',
      undefined,
      'de-DE'
    );

    return 'Hi Jo ' + pipe;
  }

  doSomething() {
    // Make sure tree shaking won't remove the lib during the build
    const erg = concat([1,2,4], [3,5]);
    console.log('concat demo lib', erg);
    return erg;
    }
}
