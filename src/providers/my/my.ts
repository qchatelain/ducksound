import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

/*
  Generated class for the MyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyProvider {

  public soundListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.soundListRef = firebase
          .database()
          .ref(`/userProfile/${user.uid}/myList`);
      }
    });
  }

  createSound(
    soundName: string,
    soundImg: string
  ): firebase.database.ThenableReference {
    return this.soundListRef.push({
      name: soundName,
      sound: soundName +'.mp3',
      img: soundImg
    });
  }

  deleteSound(
    soundId: string
  ) {
    this.soundListRef.child(soundId).remove()
      .then(function() {
      })
      .catch(function(error) {
        console.log("Erreur: " + error.message)
      });
  }

  getSoundList(): firebase.database.Reference {
    return this.soundListRef;
  }

}
