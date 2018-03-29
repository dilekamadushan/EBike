import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {Subject} from "rxjs/Subject";

import {BLE} from '@ionic-native/ble';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;

  permissions: any[] = ["BLUETOOTH", "BLUETOOTH_ADMIN", "BLUETOOTH_PRIVILEGED"];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public menuCtrl: MenuController, private ble: BLE, private androidPermissions: AndroidPermissions) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      // checking bluetooth enable
      ble.isEnabled().then(
        () => {
          console.log("already enabled");
          splashScreen.hide();
        },
        (error) => {
          console.log(error);
          ble.enable().then(
            (value) => {
              console.log("enabled");
              console.log(value);
              ble.isEnabled().then(
                () => {
                  splashScreen.hide();
                }
              )
            },
            (error) => {
              console.log(error);
            }
          )
        }
      );

    });

    this.pages = [
      //{title: 'Dashboard', component: 'HomePage', active: false, icon: 'speedometer'},
      //{title: 'Navigation', component: 'NavigationPage', active: false, icon: 'compass'},
      // {title: 'Mode', component: 'ModePage', active: false, icon: 'switch'},
      {title: 'Profile', component: 'ProfilePage', active: false, icon: 'person'},
      {title: 'Settings', component: 'SettingsPage', active: false, icon: 'settings'},
      {title: 'About', component: 'AboutPage', active: false, icon: 'information-circle'},
      {title: 'Logout', component: 'LoginPage', active: false, icon: 'log-out'}
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
    this.activePage.next(page);
  }
}
