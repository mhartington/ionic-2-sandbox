import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private things;
  private sliderOptions;
  constructor(private navCtrl: NavController) {
    this.things = [
      { h: 'One'},
      { h: 'Two'},
      { h: 'Three'},
      { h: 'Four'},
      { h: 'Five'},
      { h: 'Six'},
    ];
    this.sliderOptions = {
      initialSlide: 0,
      pager: true
    };
  }
}
