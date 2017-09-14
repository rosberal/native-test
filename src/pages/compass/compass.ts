import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
    DeviceOrientation,
    DeviceOrientationCompassHeading,
    DeviceOrientationCompassOptions,
} from '@ionic-native/device-orientation';

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
  compassResults: DeviceOrientationCompassHeading;
isContinuous:boolean =false;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private deviceOrientation: DeviceOrientation
    ) {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompassPage');
  }


getCompass()
{
  this.deviceOrientation.getCurrentHeading().then(
  (data) => {
    this.compassResults=data;
    console.log(data)
  },
  (error: any) => console.log("Erro: ",error)
);

}
stopCompass(){
  this.subscription.unsubscribe();
this.isContinuous=false;
}

compassContinuous(){
  var options:DeviceOrientationCompassOptions = {
     filter: 1  }
  this.isContinuous=true;

  //filtra mudanças menores que 01 grau

  this.subscription=  this.deviceOrientation.watchHeading(options).subscribe(
    (data) => {
                console.log(data)
                this.compassResults=data;


              });}

}
