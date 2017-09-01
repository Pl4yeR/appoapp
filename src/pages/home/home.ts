import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Appodeal } from '@ionic-native/appodeal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private appodeal: Appodeal) {

  }

  showBanner() {
    this.appodeal.show(this.appodeal.AD_TYPES.BANNER_BOTTOM)
      .catch(e => console.error(e));
  }

  removeBanner() {
    this.appodeal.hide(this.appodeal.AD_TYPES.BANNER_BOTTOM);
  }

  showIntersitial() {
    this.appodeal.show(this.appodeal.AD_TYPES.INTERSTITIAL)
      .catch(e => console.error(e));
  }

  removeIntersitial() {
    this.appodeal.hide(this.appodeal.AD_TYPES.INTERSTITIAL);
  }

}
