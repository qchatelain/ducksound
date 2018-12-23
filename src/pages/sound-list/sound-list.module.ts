import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoundListPage } from './sound-list';

@NgModule({
  declarations: [
    SoundListPage,
  ],
  imports: [
    IonicPageModule.forChild(SoundListPage),
  ],
})
export class SoundListPageModule {}
