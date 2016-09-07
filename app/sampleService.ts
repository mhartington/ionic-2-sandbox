import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

    constructor() { }

    testMethod(){
      return 'some text';
    }
}
