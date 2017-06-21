import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController, ModalController, PopoverController } from 'ionic-angular';

import { AuthPage } from '../auth/auth';
import { AboutPage } from '../about/about';
import { TermsPage } from '../terms/terms';
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { GlobalProvider } from '../../providers/config';

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
  public myFollowers: any[];
  public myFollowees: any[];
  private _checkCached: boolean = false;
  private _anyAction: boolean = false;
  submitted = false;
  public myEntity: any[];
  constructor(public popoverCtrl: PopoverController,
    public globalProvider: GlobalProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public viewCtrl: ViewController,
    public modal: ModalController,
    public api: MongerApi,
    public shared: SharedProvider) {
    if (this.navParams.get('userId') != this.globalProvider.userId) {
      this.id = this.navParams.get('userId');
    }
    if (this.navParams.get('userId')) {
      this.showBack = true;
    }
  }
  ionViewDidEnter() {
    if (this._checkCached) {
      this.ionViewDidLoad();
    } else {
      this._checkCached = true;
    }
  }
  updateUser(form) {
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
    this.getMyGossips(true);
    this.getMyFollowers();
    this.getMyFollowees();
    if (this.id) {
      this.getUserDetail();
    } else {
      this.userDetail = this.globalProvider.user;
      this.getMyEntity();
    }
  }
  
  displayImage(url, title) {
    this.shared.imageViewer.show(url, title);
  }
  dismiss() {
    this.viewCtrl.dismiss(this._anyAction);
  }
  getMyEntity(loader?) {
    this.api.getMyEntity(this.globalProvider.userId).subscribe(data => {
      this.myEntity = data;
    }, err => {
      console.error(err);
    });
  }
  userProfile(id) {
    let modal = this.modal.create(UserProfilePage, { userId: id, });
    modal.onDidDismiss(data => {
      console.log(data);
      if (data) {
        this.ionViewDidLoad();
      }
    });
    modal.present();
  }
  getMyGossips(loader?) {
    if (loader) {
      this.shared.Loader.show();
    }
    this.api.getMyGossips(this.id).subscribe(data => {
      this.myGossips = data;
      if (loader) {
        this.shared.Loader.hide();
      }
    }, err => {
      if (loader) {
        this.shared.Loader.hide();
      }
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
    }, err => {
      console.error(err);
    });
  }
  follow(id, type) {
    this._anyAction = true;
    if (type == 'userDetail' && id) {
      this.userDetail.isFollowing = !this.userDetail.isFollowing;
    } 
    this.api.followUser(id).subscribe(data => {
      if (this.segment == 'following') {
        this.getMyFollowees();
      } else if (this.segment == 'followers') {
        this.getMyFollowers();
      }

    }, err => {
      console.log(err);
    })
  }
  presentPopover(ev) {
    let popover = this.popoverCtrl.create(MoreOptionProfile);
    popover.present(
    {
      ev: ev
    }
    );
    
  }
}

// popoverMoreoption
@Component({
  template: `
  <ion-list no-border>
    <ion-list-header>
      Action
    </ion-list-header> 
    <ion-item (click)="toggleMute()"> 
      <ion-label>
         {{isMuted ? 'Unmute' : 'Mute'}} Sound
      </ion-label>
      <ion-icon [name]='isMuted ? "md-notifications-off" : "md-notifications"' item-start></ion-icon>
    </ion-item>
    <ion-item (click)="about()">
      <ion-icon name='md-information-circle' item-start></ion-icon>
      About Gossip Monger 
    </ion-item>
    <ion-item (click)="terms()">
      <ion-icon name='md-paper' item-start></ion-icon>
        Terms & Conditions  
    </ion-item>
    <ion-item>
      <ion-icon name='md-jet' item-start></ion-icon>
        Tutorial 
    </ion-item>
    <ion-item (click)="logOut()">
      <ion-icon name='log-out' item-start></ion-icon>
        Logout 
    </ion-item>
  </ion-list>
`,
providers: [SharedProvider, MongerApi]
})
export class MoreOptionProfile {
  isMuted: Boolean;
  constructor(
    public globalProvider: GlobalProvider, 
    public api: MongerApi,
    public shared: SharedProvider,
    public app: App,
    public modal: ModalController) {

    this.isMuted = globalProvider.isMuted;
  }

  toggleMute() {  
    this.shared.LS.set('isMuted', !this.isMuted);
    this.globalProvider.toggleMute(!this.isMuted);
    this.isMuted = !this.isMuted;
    return true;
  }
  logOut() {
    this.shared.Alert.confirm('Do you want to log out?').then(res => {
      this.api.logout().subscribe(response => {
        this.shared.LS.remove('user');
        this.globalProvider.dropAuthData();
        this.app.getRootNav().setRoot(AuthPage);
      }, err => {
        this.shared.Toast.show('Oops! something went wrong. Please try again');
      });

    }, err => {
      console.log('user cancelled')
    })
  }
  about () {
    let modal = this.modal.create(AboutPage);
    modal.present();
  }
  terms () {
    let modal = this.modal.create(TermsPage);
    modal.present();
  }

}