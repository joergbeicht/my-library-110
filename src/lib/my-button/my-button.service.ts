import { Injectable } from '@angular/core';
import concat from 'lodash.concat';

@Injectable({
  providedIn: 'root'
})
export class MyButtonService {

  constructor() { }

  getGreeting() {
    return 'Hi Jo';
  }

  doSomething() {
    // Make sure tree shaking won't remove the lib during the build
    const erg = concat([1,2,4], [3,5]);
    console.log('concat demo lib', erg);
    return erg;
    }
}
