import { Component } from "@angular/core";
import { Platform } from 'ionic-angular';
import { Alert, AlertController, IonicPage, NavController } from "ionic-angular";import { Media, MediaObject } from '@ionic-native/media';

import { SoundProvider } from "../../providers/sound/sound";
import { WishProvider } from "../../providers/wish/wish";
import { SmartAudio } from "../../providers/smart-audio/smart-audio";

@IonicPage()
@Component({
  selector: 'page-sound-list',
  templateUrl: 'sound-list.html',
})
export class SoundListPage {
  public soundList: Array<any>;

  constructor(
    private media: Media,
    private platform: Platform,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public soundProvider: SoundProvider,
    public wishProvider: WishProvider,
    public smartAudio: SmartAudio) {
  }

  ionViewDidLoad() {
    this.soundProvider.getSoundList().orderByChild('name').on("value", soundListSnapshot => {
      this.soundList = [];
      soundListSnapshot.forEach(snap => {
        this.soundList.push({
          id: snap.key,
          name: snap.val().name,
          img: snap.val().img,
          sound: snap.val().sound,
        });
        return false;
      });
    });
  }

  createWish(
    wishName: string,
    wishImg: string,
    wishSound: string
  ): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Son ajouté",
      buttons: [
        { text: "Ok" }
      ]
    });
    this.wishProvider
      .createWish(wishName, wishImg, wishSound)
      .then(newWish => {
        alert.present();
      });
  }

  listenSound(
    soundSound: string
   ) {
    this.platform.ready().then(() => {
      const file: MediaObject = this.media.create('../../assets/sounds/' + soundSound);
      file.play();
      console.log(file);
    });
  }
}
