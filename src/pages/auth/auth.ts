import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { GlobalProvider } from '../../providers/config';
import { TabsPage } from '../../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [SharedProvider, MongerApi]
})
export class AuthPage {

  constructor(public platform: Platform, private oneSignal: OneSignal, public globalProvider: GlobalProvider, public api: MongerApi, public shared: SharedProvider, public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, private fb: Facebook) {
    if (platform.is('cordova')) { 
        this.oneSignal.getIds().then(ids => {
          if (typeof (ids['userId']) !== 'undefined') {
            console.log(JSON.stringify(ids['userId']));
            this.globalProvider.setPlayerId(ids['userId']);
          }
        });
        }
   }
  ionViewDidLoad() { }
  googleLogin() {
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        let data = { fname: res.givenName, lname: res.familyName, email: res.email, userId: res.userId, source: 3 };
        this.api.socialLogin(data).subscribe(res => {
          this.shared.LS.set('user', res);
          this.globalProvider.setAuthData(res);
          this.googlePlus.logout();
          this.navCtrl.setRoot(TabsPage);
        }, err => {
          this.shared.Toast.show(err);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  skip() {
    let user = { "ID": "15", "user_login": "theindianhippie", "user_nicename": "5u5hil-2", "user_email": "sushil@infiniteit.biz", "user_url": "", "user_registered": "2017-04-15 08:32:41", "user_activation_key": "", "user_status": "0", "display_name": "Sushil Sudhakaran", "first_name": "Sushil", "last_name": "Sudhakaran", "source": "", "img": "http:\/\/tgm-inf.cruxservers.in\/wp-content\/themes\/tgm\/images\/user.png", "follower_count": 1, "following_count": 2 };
    this.shared.LS.set('user', user);
    this.globalProvider.setAuthData(user);
    this.navCtrl.setRoot(TabsPage);
  }
  fbLogin() {
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        this.api.getFbUserInfo(res.authResponse.accessToken).subscribe(response => {
          let data = { fname: response.first_name, lname: response.last_name, email: response.email, userId: res.authResponse.userID, source: 2 };
          this.api.socialLogin(data).subscribe(res => {
            this.shared.LS.set('user', res);
            this.globalProvider.setAuthData(res);
            this.fb.logout();
            this.navCtrl.setRoot(TabsPage);
          }, err => {
            this.shared.Toast.show(err);
          });
          this.navCtrl.setRoot(TabsPage);
        })
      }, err => {
        this.shared.Toast.show(err);
      })
      .catch(e => {
        console.log('Error logging into Facebook', e)
      });
  }
}