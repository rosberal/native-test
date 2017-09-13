import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VibrationPage } from '../pages/vibration/vibration';
import{ Vibration} from '@ionic-native/vibration';
import {CompassPage} from '../pages/compass/compass'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VibrationPage,
    CompassPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
  VibrationPage,
  CompassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
