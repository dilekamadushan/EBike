import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { NavigationPage } from '../navigation/navigation';
import {SettingsPage} from "../settings/settings";
import {ModePage} from "../mode/mode";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NavigationPage;
  tab3Root = ModePage;
  tab4Root = SettingsPage;


  constructor() {

  }
}
