import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NavigationPage } from '../navigation/navigation';
import {ModePage} from "../mode/mode";
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NavigationPage;
  tab3Root = ModePage;


  constructor(public navParams: NavParams) {

  }
}
