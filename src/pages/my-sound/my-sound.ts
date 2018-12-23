import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams, ModalController } from 'ionic-angular';

import { MyProvider } from "../../providers/my/my";
import { Media, MediaObject } from '@ionic-native/media';
import { MaPageModal } from './modal/modal'; 

/**
 * Generated class for the MySoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-sound',
  templateUrl: 'my-sound.html',
})
export class MySoundPage {

  public soundList: Array<any>;

  constructor(public platform: Platform, private media: Media, public myProvider: MyProvider, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.myProvider.getSoundList().orderByChild('name').on("value", soundListSnapshot => {
      this.soundList = [];
      soundListSnapshot.forEach(snap => {
        this.soundList.push({
          id: snap.key,
          name: snap.val().name,
          sound: snap.val().sound,
          img: snap.child("img").child("changingThisBreaksApplicationSecurity").val()
        });
        return false;
      });
    });
  }

  listenSound(
    soundSound: string
   ) {
    this.platform.ready().then(() => {
      const file: MediaObject = this.media.create('../../assets/my-sounds/' + soundSound);
      file.play();
      console.log(file);
    });
  }

  deleteSound(
    soundId: string,
  ): void {
    this.myProvider
      .deleteSound(soundId);
  }

  presentModal() {
    let modal = this.modalCtrl.create(MaPageModal);
    modal.present();
  }

}
