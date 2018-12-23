import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Alert, AlertController, Platform, NavParams, ViewController } from 'ionic-angular';
import { MyProvider } from "../../../providers/my/my";
import { Media, MediaObject } from '@ionic-native/media';
import { Camera } from '@ionic-native/camera';

@Component({
    templateUrl: 'modal.html'
})
export class MaPageModal {

    public mysoundListRef: firebase.database.Reference;
    public recording: boolean = false;
    public audio: MediaObject;
    public base64Image;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public alertCtrl: AlertController,
        public myProvider: MyProvider,
        private media: Media,
        private camera: Camera,
        private sanitizer: DomSanitizer
    ) {
    }

    takePicture(){
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
            this.base64Image = this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
        }, (err) => {
            console.log(err);
        });
    }

    startRecord(
        soundName: string
    ) {
        if (soundName != null || soundName != '') {
            this.audio = this.media.create('../../../assets/my-sounds/' + soundName + '.mp3');
            this.audio.startRecord();
            this.recording = true;
        } else {
            const alert: Alert = this.alertCtrl.create({
                message: "Aucun titre",
                buttons: [
                  { text: "Réessayer" }
                ]
            });
            alert.present();
        }
    }

    stopRecord(
        soundName: string,
        soundImg
    ) {
        this.audio.stopRecord();
        this.recording = false;
        this.createSound(soundName, soundImg);
    }

    createSound(
        soundName: string,
        soundImg: string
    ): void {
        this.myProvider
            .createSound(soundName, soundImg)
            .then(newSound => {
                this.dismiss();
            });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}