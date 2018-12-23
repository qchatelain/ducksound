import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import firebase from 'firebase/app';
import 'firebase/auth';
export const firebaseConfig = {
    apiKey: "AIzaSyBeA7FVyWzd66oElrXuHDv2iXIwMzKRKlA",
    authDomain: "ducksound-7881e.firebaseapp.com",
    databaseURL: "https://ducksound-7881e.firebaseio.com",
    projectId: "ducksound-7881e",
    storageBucket: "ducksound-7881e.appspot.com",
    messagingSenderId: "213064638223"
};

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})

export class MyApp {
    rootPage:any;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        firebase.initializeApp(firebaseConfig);

        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (!user){
                this.rootPage = 'LoginPage';
                unsubscribe();
            } else {
                this.rootPage = 'TabsPage';
                unsubscribe();
            }
        });

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
      