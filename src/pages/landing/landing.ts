import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {BLE} from "@ionic-native/ble";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  devices: any[] = ['00:15:83:31:68:00'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private ble: BLE, private androidPermissions: AndroidPermissions) {
    // checking bluetooth enable
    ble.isEnabled().then(
      () => {
        console.log("Bluetooth already enabled");
        this.scan();
      },
      (error) => {
        console.log(error);
        ble.enable().then(
          (value) => {
            console.log("enabled");
            console.log(value);
            ble.isEnabled().then(
              () => {
                this.scan();
              }
            )
          },
          (error) => {
            console.log(error);
          }
        )
      }
    );
  }

  scan() {
    this.ble.startScan(this.devices).subscribe(
      (device) => this.ble.connect(device.id).subscribe(
        (peripheral) => this.navCtrl.push(TabsPage, {
          peripheral: peripheral
        })
      ));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
