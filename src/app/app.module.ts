import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

import { TabsPage } from '../pages/tabs/tabs';
import { ProgressBarComponent} from "../components/progress-bar/progress-bar";
import {LoginPage} from "../pages/login/login";
import {PrivacyPage} from "../pages/privacy/privacy";
import {GeneralPage} from "../pages/general/general";
import {ModeSelectionPage} from "../pages/mode-selection/mode-selection";
import {NavigationPage} from "../pages/navigation/navigation";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpModule} from "@angular/http";
import {BLE} from '@ionic-native/ble';
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {LandingPage} from "../pages/landing/landing";

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    PrivacyPage,
    GeneralPage,
    ModeSelectionPage,
    NavigationPage,

    HomePage,
    TabsPage,
    LoginPage,
    LandingPage,

    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    PrivacyPage,
    GeneralPage,
    ModeSelectionPage,
    NavigationPage,

    HomePage,
    TabsPage,
    LoginPage,
    LandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
