import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration'

/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private vibration:Vibration) {
  }

vibrate(){
  console.log("Vibrate");
  this.vibration.vibrate(2000);

}

vibratePattern(){
  console.log("VibratePattern");
  this.vibration.vibrate([2000,1000,2000]);
}

vibrateStop(){
  console.log("VibrateStop");
  this.vibration.vibrate(0);
}

ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

}
