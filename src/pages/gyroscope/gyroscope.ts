import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import { ToastController } from 'ionic-angular';
import {Platform} from "ionic-angular";

/**
 * Generated class for the GyroscopePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gyroscope',
  templateUrl: 'gyroscope.html'
})
export class GyroscopePage {
gyroResults: GyroscopeOrientation;

constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private gyros: Gyroscope,
    public toastCtrl: ToastController,
    public plataform: Platform  ) {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GyroscopePage');
  }

getGyroscope(){

  this.plataform.ready().then((readySource) => {

           this.gyros.getCurrent().then((orientation: GyroscopeOrientation) => {
            console.log("GetCurrent Ok");
            this.gyroResults=orientation;
            console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
            }).catch((error) => {
                console.log('Erro pegando dados de giroscopio: ', error);
                  let toast = this.toastCtrl.create({
                message: 'Erro pegando dados de giroscopio: ' + readySource +"\n"+ error,
                duration: 3000,
                position: 'middle'
                        });
                 toast.present();
                      });
  });
}



getGyroscope2(){

  this.gyros.watch()
.subscribe((orientation: GyroscopeOrientation) => {
  console.log("watch Ok");
  this.gyroResults=orientation;
   console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
});
}


}
