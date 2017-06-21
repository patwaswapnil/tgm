import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
 

import { SharedProvider } from '../../providers/shared.provider';
import { UserProfilePage } from '../user-profile/user-profile';
import { MongerApi } from '../../providers/api.provider';
import { EntityProfilePage } from '../entity-profile/entity-profile';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
  providers: [SharedProvider, MongerApi]
})
export class CommentsPage {
  private _id;
  public gossip:any = {gossip_about: {}, author: {}, category: [{}]};
  public comments:any;
  public commentContent:any; 
  constructor(public modal: ModalController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public shared: SharedProvider, public api: MongerApi,) {
    this._id = this.navParams.get('id');
  }

  ionViewDidLoad() {
     this.getGossip();
     this.getGossipComment(true);
  }
    getGossip() {
    this.api.getGossip(this._id).subscribe(data => {
      this.gossip = data;      
    }, err => { 
      console.error(err);
    });
  }
entityProfile (id) { 
    let modal = this.modal.create(EntityProfilePage,  {id: id});
    modal.present();
  } 
      insertComment(msg) {
        if (!msg) {
          return false;
        }
    this.shared.Loader.show();
    this.api.insertComments(msg, this._id).subscribe(data => {
        this.getGossipComment();
        this.commentContent = '';
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
  userProfile(id) { 
    let modal = this.modal.create(UserProfilePage, { userId: id,  });
    modal.present();
  }
    getGossipComment(loader?) { 
      if (loader) {
        this.shared.Loader.show(); 
      }
    this.api.getGossipComments(this._id).subscribe(data => {
      this.comments = data;   
       if (loader) {
      this.shared.Loader.hide();
       } 
    }, err => { 
      console.error(err);
       if (loader) {
      this.shared.Loader.hide();     
       } 
    });
  }
  dismiss() {
    this.viewCtrl.dismiss(false);
  }
}
