import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {SampleService} from "../../sampleService";
import {SampleModal} from "../sampleModal/sampleModal";

@Component({
  templateUrl: 'build/pages/contact/contact.html',
  providers: [SampleService]
})
export class ContactPage {
  constructor(private navCtrl: NavController,
              private sampleService: SampleService,
              public modalCtrl: ModalController) {
  }

  public presentModal() {
    let modal = this.modalCtrl.create(SampleModal);
    modal.present();
  }

}
