import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

/**
 * Generated class for the GyroscopePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gyroscope',
  templateUrl: 'gyroscope.html',
})
export class GyroscopePage {
gyroResults: GyroscopeOrientation;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private gyros: Gyroscope) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GyroscopePage');
  }

getGyroscope(){

  this.gyros.getCurrent().then((orientation: GyroscopeOrientation) => {
    this.gyroResults=orientation;

    console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   }).catch((error) => {
    console.log('Erro pegando dados de giroscopio: ', error);
  });

}

}
