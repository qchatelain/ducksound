import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

interface Sound {
  key: string;
  asset: string;
}

@Injectable()
export class SmartAudio {
 
  private sounds: Sound[] = [];
  private audioPlayer: HTMLAudioElement = new Audio();
  private forceWebAudio = false;
  private isNative = false;

  constructor(private platform: Platform, private nativeAudio: NativeAudio) {
      platform.ready().then(() => {
          if (platform.is('cordova')) {
              this.isNative = true;
          }
      });
  }

  preload(key: string, asset: string): void {

      if (!this.sounds.filter((sound) => sound.key === key).length) {
          if (this.isNative && !this.forceWebAudio) {
              this.platform.ready()
                  .then(() => this.nativeAudio.preloadSimple(key, asset));
              this.sounds.push({
                  key: key,
                  asset: asset
              });
          } else {
              const audio = new Audio();
              audio.src = asset;
              this.sounds.push({
                  key: key,
                  asset: asset
              });
          }
      }
  }

  play(key: string): void {

      const soundToPlay: Sound = this.sounds.find((sound) => sound.key === key);
      if (soundToPlay) {
          if (this.isNative) {
              this.platform.ready()
                  .then(() => this.nativeAudio.play(soundToPlay.key)
                      .then((res) => {
                          console.log(res);
                      }, (err) => {
                          console.log('play error', JSON.stringify(soundToPlay), err);
                      }));
          } else {
              this.audioPlayer.src = soundToPlay.asset;
              this.audioPlayer.play()
                  .catch(() => {});
          }
      }

  }
 
}