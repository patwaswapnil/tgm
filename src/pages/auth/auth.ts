import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { GlobalProvider } from '../../providers/config';
import { TabsPage } from '../../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [SharedProvider, MongerApi]
})
export class AuthPage {
  private _location: String;
  constructor(private _geolocation: Geolocation, public platform: Platform, private oneSignal: OneSignal, public globalProvider: GlobalProvider, public api: MongerApi, public shared: SharedProvider, public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, private fb: Facebook) {
    if (platform.is('cordova')) { 
        this.oneSignal.getIds().then(ids => {
          if (typeof (ids['userId']) !== 'undefined') {
            console.log(JSON.stringify(ids['userId']));
            this.globalProvider.setPlayerId(ids['userId']);
          }
        });
        }
   }
      
  ionViewDidLoad() { 
      this._geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords);
        this.api.getGeoAddress(resp.coords).subscribe(response => {
          console.log(response.results);
          if (response.results[1]) {  
             for (var i=0; i<response.results[0].address_components.length; i++) {
            for (var b=0;b<response.results[0].address_components[i].types.length;b++) {
                if (response.results[0].address_components[i].types[b] == "administrative_area_level_2") { 
                    console.log(response.results[0].address_components[i]);
                    this.globalProvider.setLocation(response.results[0].address_components[i].long_name);
                    this._location = response.results[0].address_components[i].long_name;
                    this.shared.LS.set('location', this._location);
                    break;
                }
            }
        }
          }
        }, err => {
          console.log(err);
        })
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }
  googleLogin() {
    this.googlePlus.login({})
      .then(res => { 
        let data = { fname: res.givenName, lname: res.familyName, email: res.email, userId: res.userId, source: 3 };
        this.api.socialLogin(data).subscribe(res => {
          this.shared.LS.set('user', res);
          this.shared.LS.set('isMuted', false);
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
    this.shared.LS.set('isMuted', false);
    this.globalProvider.setAuthData(user);
    this.navCtrl.setRoot(TabsPage);
  }
  fbLogin() {
    this.fb.login(['public_profile', 'email', 'user_location'])
      .then((res: FacebookLoginResponse) => {
        this.api.getFbUserInfo(res.authResponse.accessToken).subscribe(response => {
          let data = { fname: response.first_name, lname: response.last_name, email: response.email, userId: res.authResponse.userID, source: 2 };
          this.api.socialLogin(data).subscribe(res => {
            this.shared.LS.set('user', res);
            this.shared.LS.set('isMuted', false); 
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