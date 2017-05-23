import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ModalController } from 'ionic-angular';
import { userId, user } from '../../providers/config';

import { AddEntityPage } from '../../pages/add-entity/add-entity';
import { AddGossipPage } from '../../pages/add-gossip/add-gossip';
import { EntityProfilePage } from '../../pages/entity-profile/entity-profile';

import { SharedProvider } from '../../providers/shared.provider'
import { SearchPage } from '../../pages/search/search'
 import { MongerApi } from '../../providers/api.provider'

@Component({
  selector: 'page-request',
  templateUrl: 'request.html', 
   providers: [SharedProvider, MongerApi]

})
export class RequestPage {
 public type:any;
  public icon = 'assets/img/loved.png';
  public addGossip:any = {posted_as: userId};
  public myEntity:any[];
  public user:any = user;
  public id;
  public segment:any = 'gossip';
  public selectedEntity: any = {category: [{name: null}]};
  constructor(public modal: ModalController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public api: MongerApi, public shared: SharedProvider) {}

  ionViewDidLoad() { 
       this.getMyEntity();
  }
  addEntity  () {
              this.navCtrl.push(AddEntityPage);
     
} 

// add gossip

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
     let type = Number(gossip.type); 
     
     if ( gossip.posted_as != 'anonymous') {
       posted_as = gossip.posted_as;
       isAnonymous = 0;
     } else {
       isAnonymous = 1;
       posted_as = null;
     }
     
    this.shared.Loader.show();
    this.api.insertGossip(entityId, content, isAnonymous, type, posted_as, null).subscribe(data => {
       this.shared.Toast.show('Gossip created successfully');
        this.addGossip = {posted_as: userId};  
        this.selectedEntity = {category: [{name: null}]};
        
    let modal = this.modal.create(EntityProfilePage, {id: entityId, type: type});
    modal.present();  
      console.log(data);
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
}
