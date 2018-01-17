import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFirstPage } from './my-first';

@NgModule({
  declarations: [
    MyFirstPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFirstPage),
  ],
})
export class MyFirstPageModule {}
