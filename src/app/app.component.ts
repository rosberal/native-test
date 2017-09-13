
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VibrationPage } from '../pages/vibration/vibration';

import { CompassPage } from './../pages/compass/compass';
import { GeolocationPage } from './../pages/geolocation/geolocation';
import { GyroscopePage } from './../pages/gyroscope/gyroscope';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, iconName: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, iconName: "home" },
      { title: 'List', component: ListPage,iconName: "list" },
      { title: 'Vibration', component: VibrationPage,iconName: "pulse" },
      { title: 'Compass', component: CompassPage,iconName: "compass" },
      { title: 'Geolocation', component: GeolocationPage,iconName: "locate" },
      { title: 'Gyroscope', component: GyroscopePage,iconName: "add-circle" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
