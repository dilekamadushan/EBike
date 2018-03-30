import { Component } from '@angular/core';
import {IonicPage, NavParams} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'NavigationPage';
  tab3Root = 'ModePage';

  constructor(public navParams: NavParams) {

  }
  
}
