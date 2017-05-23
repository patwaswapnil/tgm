import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, private fb: Facebook) { }
  ionViewDidLoad() { }
  googleLogin() {
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(err => {
        console.error(err);
        this.navCtrl.setRoot(TabsPage);        
      });
  }
  fbLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res) 
        this.navCtrl.setRoot(TabsPage);        
      })
      .catch(e => {
        console.log('Error logging into Facebook', e)
      });
  }
}