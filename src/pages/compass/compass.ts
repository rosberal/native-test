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
  //options:DeviceOrientationCompassOptions;
  continuousMode:boolean=false;
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
 this.continuousMode=false;
}

compassContinuous(){
  var options = {
     filter: 1
  }  //filtra mudanças menores que 01 grau
  this.continuousMode=true;
  this.subscription=  this.deviceOrientation.watchHeading().subscribe(
    (data) => {
                console.log(data)
                this.compassResults=data;


              });}

}
