import { Component } from "@angular/core";
import { Platform, IonicPage, NavController } from "ionic-angular";
import { SoundProvider } from "../../providers/sound/sound";
import { WishProvider } from "../../providers/wish/wish";
import { Media, MediaObject } from '@ionic-native/media';

@IonicPage()
@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish-list.html',
})
export class WishListPage {
  public wishList: Array<any>;

  constructor(public platform: Platform, private media: Media, public navCtrl: NavController, public soundProvider: SoundProvider, public wishProvider: WishProvider) {
  }

  ionViewDidLoad() {
    this.wishProvider.getWishList().orderByChild('name').on("value", wishListSnapshot => {
      this.wishList = [];
      wishListSnapshot.forEach(snap => {
        this.wishList.push({
          id: snap.key,
          name: snap.val().name,
          img: snap.val().img,
          sound: snap.val().sound,
        });
        return false;
      });
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

  deleteWish(
    wishId: string,
  ): void {
    this.wishProvider
      .deleteWish(wishId);
  }
}
