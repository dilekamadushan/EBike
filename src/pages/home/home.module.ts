import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {ProgressBarComponent} from "../../components/progress-bar/progress-bar";

@NgModule({
  declarations: [
    HomePage,
    ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})

export class HomePageModule {}
