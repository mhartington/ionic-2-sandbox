import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SampleService} from "../../sampleService";

@Component({
  templateUrl: 'build/pages/sampleModal/sampleModal.html'
})
export class SampleModal {
  constructor(private navCtrl: NavController,
              private sampleService: SampleService) {

  }

  testMethod() {
    return this.sampleService.testMethod();
  }
}
