import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable()
export class WishProvider {

  public wishListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.wishListRef = firebase
          .database()
          .ref(`/userProfile/${user.uid}/wishList`);
      }
    });
  }

  createWish(
    wishName: string,
    wishImg: string,
    wishSound: string
  ): firebase.database.ThenableReference {
    return this.wishListRef.push({
      name: wishName,
      img: wishImg,
      sound: wishSound
    });
  }

  deleteWish(
    wishId: string
  ) {
    this.wishListRef.child(wishId).remove()
      .then(function() {
      })
      .catch(function(error) {
        console.log("Erreur: " + error.message)
      });
  }

  getWishList(): firebase.database.Reference {
    return this.wishListRef;
  }

}
