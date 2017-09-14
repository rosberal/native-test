
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import{ Vibration} from '@ionic-native/vibration';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { VibrationPage } from '../pages/vibration/vibration';


import {CompassPage} from '../pages/compass/compass'
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { GyroscopePage } from '../pages/gyroscope/gyroscope';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VibrationPage,
    CompassPage,
    GeolocationPage,
    GyroscopePage
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
  CompassPage,
  GeolocationPage,
  GyroscopePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    DeviceOrientation,
    Geolocation,
    Gyroscope,
   {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
