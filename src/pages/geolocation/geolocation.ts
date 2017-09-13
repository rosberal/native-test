import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

 geoResults: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private geolocation:Geolocation
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }


getGeolocation(){
  this.geolocation.getCurrentPosition().then((resp) => {
  this.geoResults=resp;

   }).catch((error) => {
     console.log('Error getting location', error);
   });


}

}
