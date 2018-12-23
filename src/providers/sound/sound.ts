import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable()
export class SoundProvider {
  
  public soundListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.soundListRef = firebase
          .database()
          .ref(`/soundList`);
      }
    });
  }

  getSoundList(): firebase.database.Reference {
    return this.soundListRef;
  }

}
