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

  devices: string[] = ["00:15:83:31:68:00"];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private ble: BLE, private androidPermissions: AndroidPermissions) {
    // checking bluetooth enable
    ble.isEnabled().then(
      () => {
        console.log("Bluetooth already enabled");
        this.toastCtrl.create({
          message: 'Bluetooth already enabled',
          duration: 3000,
          position: 'middle'
        }).present();
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
                this.toastCtrl.create({
                  message: 'Bluetooth enabled',
                  duration: 3000,
                  position: 'middle'
                }).present();

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
    // TODO : specify UUID
    this.ble.startScan([]).subscribe(
      (device) => {
        this.toastCtrl.create({
          message: 'Device found',
          duration: 3000,
          position: 'middle'
        }).present();

        this.ble.connect(device.id).subscribe(
          (peripheral) => {
            this.toastCtrl.create({
              message: 'Device connected',
              duration: 3000,
              position: 'middle'
            }).present();

            this.navCtrl.push(TabsPage, { peripheral: peripheral });
          },
          (error) => {
            this.toastCtrl.create({
              message: 'Error in connect',
              duration: 3000,
              position: 'middle'
            }).present();
          }
        );
      },
      (error) => {
        this.toastCtrl.create({
          message: 'Error in found',
          duration: 3000,
          position: 'middle'
        }).present();
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
