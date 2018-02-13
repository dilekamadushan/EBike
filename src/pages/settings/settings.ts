import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PrivacyPage} from '../privacy/privacy'
import {GeneralPage} from '../general/general'
import {AboutPage} from '../about/about'


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  presentPrivacy(){
    let modal = this.modalCtrl.create(PrivacyPage);
    modal.present();
  }

  presentGeneral(){
    let modal = this.modalCtrl.create(GeneralPage);
    modal.present();
  }
  presentAbout(){
    let modal = this.modalCtrl.create(AboutPage);
    modal.present();
  }

}
