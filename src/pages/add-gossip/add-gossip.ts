import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ViewController } from 'ionic-angular';
import { userId, user } from '../../providers/config';
 import { MongerApi } from '../../providers/api.provider';

import { SharedProvider } from '../../providers/shared.provider';
import { SearchPage } from '../../pages/search/search';
@Component({
  selector: 'page-add-gossip',
  templateUrl: 'add-gossip.html',
  providers: [SharedProvider, MongerApi]
})
export class AddGossipPage {
  public type:any; 
  public news:any; 
  public addGossip:any = {posted_as: userId, via: null};
  public myEntity:any[];
  public user:any = user;
  public id;
  public selectedEntity: any = {category: [{name: null}]};
  constructor(public modal: ModalController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public api: MongerApi, public shared: SharedProvider) {
      this.type = this.navParams.get('type');
      this.addGossip.type = this.navParams.get('type');
      this.id = this.navParams.get('id');
      this.addGossip.id = this.navParams.get('id');
      if (this.navParams.get('data')) {
      this.news = this.navParams.get('data').title;        
      this.addGossip.via = this.navParams.get('data').id;        
      }
       
  } 
   getMyEntity() {
    this.shared.Loader.show();
    this.api.getMyEntity(userId).subscribe(data => {
      this.myEntity = data;
      console.log(data);
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
    searchEntity() {
    let modal = this.modal.create(SearchPage, {source: 'gossip'});
    modal.onDidDismiss(data => {
      console.log(data);
      if (data) {
        this.id = data.id;
        this.addGossip.id = data.id;
        this.selectedEntity = data;
      } else {
        
      }
    });
    modal.present();
  }
   insertGossip(gossip) {
     console.log(gossip);
     let entityId = this.id;
     let content = gossip.name;
     let isAnonymous;
     let posted_as;
     let type = gossip.type;
     let via = this.addGossip.via;
     if (!gossip.type) {
        type = gossip.type;
     }
     if (gossip.posted_as != userId && gossip.posted_as != 'anonymous') {
       posted_as = gossip.posted_as;
     }  
      if (gossip.posted_as == 'anonymous') {
       isAnonymous = 1;
       posted_as = null; 
     } else {
       isAnonymous = 0;
     } 
    this.shared.Loader.show();
    this.api.insertGossip(entityId, content, isAnonymous, type, posted_as, via).subscribe(data => {
      this.dismiss();
      console.log(data);
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
  ionViewDidLoad() {
   this.getMyEntity();
  }
   dismiss () {
    this.viewCtrl.dismiss();
  }

}
