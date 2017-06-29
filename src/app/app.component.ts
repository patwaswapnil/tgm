import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedProvider } from '../providers/shared.provider';
import { GlobalProvider, statusBarColor } from '../providers/config';
import { OneSignal } from '@ionic-native/onesignal';
import { Deeplinks } from '@ionic-native/deeplinks';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { CommentsPage } from '../pages/comments/comments';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { SearchPage } from '../pages/search/search';

declare var window;

@Component({
  templateUrl: 'app.html',
  providers: [SharedProvider]
})
export class MyApp {
  @ViewChild(Nav) navController: Nav;
  rootPage: any;
  private _isColdStart: Boolean = true;
  constructor(public events: Events, private deeplinks: Deeplinks, public globalProvider: GlobalProvider, private oneSignal: OneSignal, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard,
    public shared: SharedProvider) {
    shared.LS.get('user').then((data: any) => {
      if (!data) {
        this.rootPage = AuthPage;
      } else {
        this.globalProvider.setAuthData(data);
        this.rootPage = TabsPage;
        this._isColdStart = false;
      }
    });
    shared.LS.get('isMuted').then((data: any) => {
      this.globalProvider.toggleMute(data);
    });
    shared.LS.get('location').then((data: any) => {
      console.log(data);
      this.globalProvider.setLocation(data);
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      keyboard.disableScroll(true);
      keyboard.hideKeyboardAccessoryBar(false);
      statusBar.styleDefault();
      statusBar.backgroundColorByHexString(statusBarColor);
      splashScreen.hide();

      if (platform.is('cordova')) {
        this.oneSignal.startInit('4cf261ef-295d-4258-b259-788d122d8e0b', 'Y2MwMTZjZmEtMThlZS00NmE5LWIyMGEtODUyYzVhY2QyMjc3');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe((data) => {
          console.log(data);
        });
        this.oneSignal.handleNotificationOpened().subscribe((data) => {
          console.log(data);
          let payload = data;
          if (this._isColdStart) {
            events.subscribe('root:created', (data) => {
              this.redirectToPage(payload);
              events.unsubscribe('root:created');
            });
          } else {
            this.redirectToPage(data);
          }
        });
        this.oneSignal.endInit();
      }
      this.deeplinks.routeWithNavController(this.navController, {
        '/gossip/:id': CommentsPage
      }).subscribe((match) => {
        console.log('Successfully matched route', match);
      }, (nomatch) => {
        console.error('Got a deeplink that didn\'t match', nomatch);
      });
    });
  }
  redirectToPage(data) {
    console.log(data);
    let type
    try {
      type = data.notification.payload.additionalData.type;
    } catch (e) {
      console.warn(e);
    }
    switch (type) {
      case 'Followers': {
        this.navController.push(UserProfilePage, { userId: data.notification.payload.additionalData.uid });
        break;
      } case 'comment': {
        this.navController.push(CommentsPage, { id: data.notification.payload.additionalData.pid })
        break;
      }
    }
  }
}
