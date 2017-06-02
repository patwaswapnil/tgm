import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ModalController, ActionSheetController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/config';
import { DomSanitizer} from '@angular/platform-browser';
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
  public addGossip:any = {posted_as: this.globalProvider.userId, image: null};
  public myEntity:any[];
  public user:any = this.globalProvider.user;
  public id;
  private _isPageLoaded:any = 0;
  public segment:any = 'gossip';
  public selectedEntity: any = {category: [{name: null}]};
    public showNotFound: boolean = false;

  constructor(public actionSheetCtrl: ActionSheetController, private sanitizer: DomSanitizer, public globalProvider: GlobalProvider, public modal: ModalController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public api: MongerApi, public shared: SharedProvider) {}

  ionViewDidLoad() { 
       this.getMyEntity(true); 
  }
  addEntity () {
              this.navCtrl.push(AddEntityPage); 
} 

// add gossip
ionViewDidEnter() {
 this._isPageLoaded =   this._isPageLoaded + Number(1); 
  if (this._isPageLoaded > 1) {
       this.getMyEntity(); 
  }
}
 getMyEntity(loader?) {
  if (loader) {
    this.shared.Loader.show();
  }
    this.api.getMyEntity(this.globalProvider.userId).subscribe(data => {
      this.myEntity = data;
       if (!this.myEntity.length) {
        this.showNotFound = true;
      } 
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
    private chooseImage(source) {
    this.shared.uploadMedia.image(source)
      .then((imageData) => {
        this.addGossip.image = 'data:image/png;base64,' + imageData;
      }, (err) => {
      });
  }

  selectImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Capture image with',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.chooseImage(1);
          }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.chooseImage(2);
          }
        }
      ]
    }); 
    actionSheet.present();
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
   entityProfile (id, type) {
    console.log('EntityProfile');
    let modal = this.modal.create(EntityProfilePage, {id: id, type});
    modal.present();
  } 
  getBackground (image) {
     return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
}

   insertGossip(gossip) {
     console.log(gossip); 
     let isAnonymous; 
     gossip.via = null;
     if (gossip.posted_as != 'anonymous') { 
       gossip.isAnonymous = 0;
     } else {
       gossip.isAnonymous = 1;
       gossip.posted_as = null;
     }
    gossip.image = this.addGossip.image;
    this.shared.Loader.show();
    this.api.insertGossip(gossip).subscribe(data => {
       this.shared.Toast.show('Gossip created successfully');
        this.addGossip = {posted_as: this.globalProvider.userId};  
        this.selectedEntity = {category: [{name: null}]};
        
    let modal = this.modal.create(EntityProfilePage, {id: gossip.id, type: gossip.feedbackType});
    modal.present();  
      console.log(data);
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
    removeImage () {
    this.addGossip.image = '';
  }
}
