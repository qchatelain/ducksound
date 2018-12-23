import { Injectable } from '@angular/core';

import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { AuthCredential } from '@firebase/auth-types';

import {
    Alert,
    AlertController
} from "ionic-angular";

@Injectable()
export class ProfileProvider {

    public userProfile: firebase.database.Reference;
    public currentUser: User;
    public AuthCredential: any;

    constructor(
        public alertCtrl: AlertController
    ) {
        firebase.auth().onAuthStateChanged( user => {
            if(user){
                this.currentUser = user;
                this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
            }
        });
    }

    getUserProfile(): firebase.database.Reference {
        return this.userProfile;
    }

    updateName(userName: string,): Promise<any> {
        return this.userProfile.update({ userName });
    }

    updateEmail(newEmail: string, password: string): Promise<any> {
        const credential: AuthCredential = firebase.auth.
        EmailAuthProvider.credential(
            this.currentUser.email,
            password
        );
        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(user => {
                this.currentUser.updateEmail(newEmail).then(user => {
                    this.userProfile.update({ email: newEmail });
                });
            })
            .catch(error => {
                const alert: Alert = this.alertCtrl.create({
                    message: "Identifiants incorrects",
                    buttons: [
                      { text: "Ok" }
                    ]
                });
                alert.present();
            });
    }

    updatePassword(newPassword: string, oldPassword: string): Promise<any> {
        const credential: AuthCredential = firebase.auth
            .EmailAuthProvider.credential(
                this.currentUser.email,
                oldPassword
            );

        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(user => {
                this.currentUser.updatePassword(newPassword).then(user => {
                    let alert: Alert = this.alertCtrl.create({
                        title: 'Mot de passe changé',
                        buttons: [
                            { text: 'Fermer' }
                        ]
                    });
                    alert.present();
                });
            })
            .catch(error => {
                const alert: Alert = this.alertCtrl.create({
                    message: "Mot de passe incorrect",
                    buttons: [
                      { text: "Ok" }
                    ]
                });
                alert.present();
            });
    }

    deleteUser(password: string): Promise<any> {
        var id = this.currentUser.uid;
        const credential: AuthCredential = firebase.auth
            .EmailAuthProvider.credential(
                this.currentUser.email,
                password
            );

        return this.currentUser
            .reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
                firebase.auth().currentUser.delete().then(function() {
                    firebase.database().ref(`/userProfile/${id}`).remove()
                        .then(function() {
                            this.navCtrl.setRoot('SignupPage');
                        })
                        .catch(function(error) {
                            console.log("Erreur: " + error.message)
                        });
                  }).catch(function(error) {
                    console.log("Erreur: " + error.message)
                  });
            }).catch(function(error) {
                const alert: Alert = this.alertCtrl.create({
                    message: "Mot de passe incorrect",
                    buttons: [
                      { text: "Ok" }
                    ]
                });
                alert.present();
            });
    }
}
