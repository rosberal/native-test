import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

/**
 * Generated class for the CompassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compass',
  templateUrl: 'compass.html',

})
export class CompassPage {
  subscription: any;
  data: DeviceOrientationCompassHeading;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private deviceOrientation: DeviceOrientation
    ) {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompassPage');
  }


startCompass()
{
  this.deviceOrientation.getCurrentHeading().then(
  (data) => console.log(data),
  (error: any) => console.log(error)
);

}
stopCompass(){
  this.subscription.unsubscribe();}

compassContinuous(){
  this.subscription=  this.deviceOrientation.watchHeading().subscribe(
    (data: DeviceOrientationCompassHeading) => console.log(data));}

}
