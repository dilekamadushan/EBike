import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { ProgressBarComponent} from "../components/progress-bar/progress-bar";
import {LoginPage} from "../pages/login/login";
import {PrivacyPage} from "../pages/privacy/privacy";
import {GeneralPage} from "../pages/general/general";
import {ModeSelectionPage} from "../pages/mode-selection/mode-selection";
import {NavigationPage} from "../pages/navigation/navigation";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ModePage} from "../pages/mode/mode";
import {ProfilePage} from "../pages/profile/profile";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    PrivacyPage,
    GeneralPage,
    ModeSelectionPage,
    NavigationPage,

    HomePage,
    TabsPage,
    LoginPage,
    ModePage,

    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    PrivacyPage,
    GeneralPage,
    ModeSelectionPage,
    NavigationPage,

    HomePage,
    TabsPage,
    LoginPage,
    ModePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
