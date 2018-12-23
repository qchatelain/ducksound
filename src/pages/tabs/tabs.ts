import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  mySelectedIndex: any;
  tab1Root = 'SoundListPage';
  tab2Root = 'WishListPage';
  tab3Root = 'MySoundPage';
  tab4Root = 'ProfilePage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
