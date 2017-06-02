import { Component } from '@angular/core'; 
 import { ModalController } from 'ionic-angular';

import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider'; 
import { EntityProfilePage } from '../../pages/entity-profile/entity-profile';

@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
  providers: [SharedProvider, MongerApi]
})
export class BookmarkPage {
  segment:any = 'gossips';
  public followedEntities:any[];
  public followedGossips:any[];
  public showNotFound: boolean = false;
  public showNotFound1: boolean = false;
  private _isPageLoaded:any = 0;
  constructor( public modal: ModalController, public api: MongerApi, public shared: SharedProvider) {}

  ionViewDidLoad() {
    this.getFollowedEntities(true);
    this.getFollowedGossips();
  } 
  ionViewDidEnter() {
     if (this._isPageLoaded > 0) {
    this.getFollowedEntities();
    this.getFollowedGossips();
  } else { 
    this._isPageLoaded =   this._isPageLoaded + Number(1);  
  }
  }
   getFollowedEntities(loader?) {
     if (loader) {
      this.shared.Loader.show();
     }
    this.api.followedEntity().subscribe(data => {
      this.followedEntities = data;
      if (!this.followedEntities.length) {
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

    entityProfile (id, type) {
    console.log('EntityProfile');
    let modal = this.modal.create(EntityProfilePage, {id: id, type});
    modal.present();
  } 

   getFollowedGossips() { 
    this.api.followedGossips().subscribe(data => {
      this.followedGossips = data;
       if (!this.followedGossips.length) {
        this.showNotFound1 = true;
      }   
    }, err => { 
      console.error(err);
    });
  }
  
}
