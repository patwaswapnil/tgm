import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController, ModalController } from 'ionic-angular';

import { AuthPage } from '../auth/auth'; 
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { user, userId } from '../../providers/config'; 

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
  providers: [SharedProvider, MongerApi]
})
export class UserProfilePage {
  public userDetail: any = {};
  public id: any;
  public showBack: Boolean = false;
  public segment: any = 'myGossips';
  public myGossips: any[];
  public myGossipsCount: Number;
  public myFollowers: any[];
  public myFollowees: any[];
  private _checkCached: boolean = false;
  private _anyAction: boolean = false;
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public viewCtrl: ViewController, public modal: ModalController, public api: MongerApi, public shared: SharedProvider) {
    if (this.navParams.get('userId') != userId) {
    this.id = this.navParams.get('userId'); 
  } 
  if (this.navParams.get('userId')) {
    this.showBack = true; 
    } 
  }
ionViewDidEnter () { 
  if (this._checkCached) {
 this.ionViewDidLoad();
  } else {
    this._checkCached = true;
  }
}
updateUser (form) {
    // console.log(form.valid());
    // if (form.valid()) {
    //   this.api.updateProfile(form.first_name, form.last_name, form.mobile).subscribe(data => {
    //     console.log(data);
    //   }, err => {
    //     console.log(err);
    //   })
    // }
}
  ionViewDidLoad() { 
    this.getFollowedEntities();
    this.getMyFollowers();
    this.getMyFollowees();
    if (this.id) {
      this.getUserDetail();
    } else {
    this.userDetail = user;
    }
  }
  logOut() {
    this.app.getRootNav().setRoot(AuthPage);
  }
  dismiss() {
    this.viewCtrl.dismiss(this._anyAction);
  } 
  userProfile(id) { 
    let modal = this.modal.create(UserProfilePage, { userId: id,  });
    modal.onDidDismiss(data => {
      console.log(data);
      if (data) {
        this.ionViewDidLoad();
      }
    });
    modal.present();
  }
  getFollowedEntities() {
    this.shared.Loader.show();
    this.api.getMyGossips(this.id).subscribe(data => {
      this.myGossips = data;
      this.myGossipsCount = data.length + 1;
      console.log(data);
      this.shared.Loader.hide();
    }, err => {
      this.shared.Loader.hide();
      console.error(err);
    });
  }
  getMyFollowers() {
    this.api.getMyFollowers(this.id).subscribe(data => {
      this.myFollowers = data;
    }, err => {
      console.error(err);
    });
  }
  getUserDetail() {
    this.api.getUserDetail(this.id).subscribe(data => {
      this.userDetail = data;
    }, err => {
      console.error(err);
    });
  }
  getMyFollowees() {
    this.api.getMyFollowees(this.id).subscribe(data => {
      this.myFollowees = data;
      console.log(data);
    }, err => {
      console.error(err);
    });
  } 
   follow(id, type) {
     this._anyAction = true;
     if (type == 'userDetail') {
       console.log(this.userDetail.isFollowing);
       this.userDetail.isFollowing = !this.userDetail.isFollowing;
       console.log(this.userDetail.isFollowing);
       
     }
 this.api.followUser(id).subscribe(data => {
   if (this.segment == 'following') {
     this.getMyFollowees();
   } else if (this.segment == 'followers')  {
     this.getMyFollowers(); 
   }
      
    }, err => {
      console.log(err);
    })
  }
 
   
}
