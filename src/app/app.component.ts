import { Component } from '@angular/core';
import { Platform, IonicApp, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedProvider } from '../providers/shared.provider';
import { GlobalProvider } from '../providers/config';
import { OneSignal } from '@ionic-native/onesignal';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { RequestPage } from '../pages/request/request';
import { AddGossipPage } from '../pages/add-gossip/add-gossip';

declare var window;

@Component({
  templateUrl: 'app.html',
  providers: [SharedProvider]
})
export class MyApp {

  rootPage: any;

  constructor(public globalProvider: GlobalProvider, private oneSignal: OneSignal, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard, ionicApp: IonicApp, menuCtrl: MenuController, public alertCtrl: AlertController, public shared: SharedProvider) {
    shared.LS.get('user').then((data: any) => {
      if (!data) {
        this.rootPage = AuthPage;
      } else {
        this.globalProvider.setAuthData(data);
        this.rootPage = TabsPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      keyboard.disableScroll(true);
      keyboard.hideKeyboardAccessoryBar(false);
      statusBar.styleDefault();
      statusBar.backgroundColorByHexString('#5e1b7e');
      splashScreen.hide();
      console.log(platform.is('cordova'));
      console.log(this.globalProvider.playerId);
      console.log(window.cordova);

      if (platform.is('cordova')) {

        this.oneSignal.startInit('4cf261ef-295d-4258-b259-788d122d8e0b', 'Y2MwMTZjZmEtMThlZS00NmE5LWIyMGEtODUyYzVhY2QyMjc3');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

        this.oneSignal.handleNotificationReceived().subscribe((data) => {
          // do something when notification is received
          console.log('notification recired' + data);
        });
        this.oneSignal.handleNotificationOpened().subscribe((data) => {
          // do something when a notification is opened
          console.log('notification opened' + data);
        });
        this.oneSignal.endInit(); 
      }

    });
  }
}
