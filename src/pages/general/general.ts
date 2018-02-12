import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public  viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralPage');
  }

  closePage() {
   this.viewCtrl.dismiss();
  }

}
