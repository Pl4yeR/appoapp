import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appodeal } from '@ionic-native/appodeal';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private appodeal: Appodeal) {

    platform.ready().then(() => {
      // Init appodeal SDK
      this.setupAdds();

      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  private setupAdds() {
    if (!this.platform.is('cordova')) return;

    this.appodeal.setTesting(true);
    this.appodeal.setLogging(true);
    this.appodeal.disableLocationPermissionCheck();
    this.appodeal.disableWriteExternalStoragePermissionCheck();

    this.appodeal.initialize('b0f0a2c5f013f7ec166b5c5feac6ed67bd628e6964d29808',
      this.appodeal.AD_TYPES.INTERSTITIAL
      | this.appodeal.AD_TYPES.BANNER
      | this.appodeal.AD_TYPES.BANNER_BOTTOM);

  }

}

