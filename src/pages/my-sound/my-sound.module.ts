import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySoundPage } from './my-sound';

@NgModule({
  declarations: [
    MySoundPage,
  ],
  imports: [
    IonicPageModule.forChild(MySoundPage),
  ],
})
export class MySoundPageModule {}
