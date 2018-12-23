import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Media } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MaPageModal } from '../pages/my-sound/modal/modal';
import { AuthProvider } from '../providers/auth/auth';
import { SoundProvider } from '../providers/sound/sound';
import { ProfileProvider } from '../providers/profile/profile';
import { WishProvider } from '../providers/wish/wish';
import { SmartAudio } from '../providers/smart-audio/smart-audio';
import { MyProvider } from '../providers/my/my';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MaPageModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Retour'
    }),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MaPageModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    NativeAudio,
    StreamingMedia,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    SoundProvider,
    ProfileProvider,
    WishProvider,
    SmartAudio,
    MyProvider 
  ]
})
export class AppModule {}
