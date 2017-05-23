import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Content } from 'ionic-angular'; 

import { SharedProvider } from '../../providers/shared.provider'
import { MongerApi } from '../../providers/api.provider'
import { userId } from '../../providers/config';

import { ReviewPage } from '../review/review';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';
import { Vibration } from '@ionic-native/vibration';
import { CommentsPage } from '../comments/comments';
import { AddGossipPage } from '../add-gossip/add-gossip';

@Component({
  selector: 'page-entity-profile',
  templateUrl: 'entity-profile.html',
  providers: [SharedProvider, MongerApi]
})
export class EntityProfilePage {
  public segment:any = 'news';
  private _id:any;
  private _type:any;
    public entityGossips:any[];
    public entityNews:any[];

  public entityDetail:any = {category: [{}]};
  @ViewChild(Content) content: Content;
  constructor(public api: MongerApi, public shared: SharedProvider, public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public viewCtrl: ViewController, public smartAudio: SmartAudio, private vibration: Vibration) {
         smartAudio.preload('negative', 'assets/sounds/Negative.mp3');
         smartAudio.preload('positive', 'assets/sounds/Positive.mp3');
         this._id = this.navParams.get('id');
         this._type = this.navParams.get('type');
  } 
  ionViewDidLoad() {
    if (this._type == 1) {
        this.tapEvent(2); 
    } else if (this._type == 2) {
      this.tapEvent(1);
    }
    this.getEntityDetail();
    this.getGossips();
    this.getEntityNews();
  }
  boomarkEntity(id) {
    this.entityDetail.entityFollow = !this.entityDetail.entityFollow;
    this.api.followEntity(id).subscribe(data => {
      if (this.entityDetail.entityFollow) {
        this.shared.Toast.show('Started following '+ this.entityDetail.title, null, 'bottom');
      } else {
        this.shared.Toast.show('Unfollowed '+ this.entityDetail.title, null, 'bottom');        
      }
      console.log(data);
    }, err => {
console.error(err);
    })
  }
  getGossips () { 
    this.shared.Loader.show();
    let feedbackType = 0;
    if (this.segment == 'hated') {
      feedbackType = 1;
    }
    this.api.getGossipByEntity(this._id, feedbackType).subscribe(data => {
      this.entityGossips = data; 
      this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();      
    console.log(err);     
    })
  }
  getEntityNews () { 
    this.api.getEntityNews(this._id).subscribe(data => {
      this.entityNews = data; 
    }, err => {
    console.log(err);     
    })
  }
  updateSegment (segment) {
    if (segment != 'news') {
      this.getGossips();
    }
  }
   
    getEntityDetail () { 
    this.api.getEntityDetail(this._id).subscribe(data => {
      this.entityDetail = data; 
    }, err => { 
      console.error(err);
    })
  }
  tapEvent (ev) {
   console.log(ev);
   let modal:any;  
   if (ev.direction == 2 || ev == 2) {
      modal = this.modal.create(ReviewPage, {type: 0, id: this._id});
      this.smartAudio.play('positive');
   } else {
      modal = this.modal.create(ReviewPage, {type: 1,  id:this._id});
      this.smartAudio.play('negative');
   }
  this.vibration.vibrate(75);
   modal.present();
}
dismiss () {
  this.viewCtrl.dismiss();
}
scroll () { 
  console.log( this.content.contentHeight); 
  this.content.scrollTo(0,  this.content.contentHeight, 300);
}
 addGossips (news?) {
    let modal = this.modal.create(AddGossipPage, {type:  null, id:  this._id, data: news})
     modal.onDidDismiss((type) => {
            this.getGossips();
        });
    modal.present(); 
  }
    

}