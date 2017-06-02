import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { EntityProfilePage } from '../../pages/entity-profile/entity-profile';
import { CommentsPage } from '../../pages/comments/comments';
import { GossipsPage } from '../../pages/gossips/gossips';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-search',
  providers: [SharedProvider, MongerApi],
  templateUrl: 'search.html'
})
export class SearchPage {

  lead;
  queryText: string; 
  users: Array<any> = [];
  results: Array<any> = [];
  loadingData: boolean = false;
  showNotFound: boolean = false; 
  type:  string = 'entity';
  param:  string = 'entity';
  private _isEdding: boolean = false;
  constructor(
    private sanitizer: DomSanitizer, public modal: ModalController, public viewCtrl: ViewController,  public shared: SharedProvider, public statusBar: StatusBar, public navParams: NavParams, public api: MongerApi
  ) {
    this.queryText = '';
    this.param = this.navParams.get('source'); 
    if (this.navParams.get('source')) {
      this._isEdding = true;
    }
  }
  ionViewDidEnter() {
    let elem: any = document.querySelector('page-search input');
    if (elem) {
      elem.focus();
    }
    this.statusBar.backgroundColorByHexString('#e0e0e0');
  }
  ionViewWillLeave() { 
    this.statusBar.backgroundColorByHexString('#5e1b7e');  
  }
  clearUsers() {
    this.users = [];
  } 
  searchEntity() {
    this.showNotFound = false;
    if (!this.queryText) {
      return false;
    }
    this.loadingData = true;
    this.api.searchEntity(this.queryText, this.type).subscribe(data => {
      this.results = data;
      try {
         if (!this.results.length) {
        this.showNotFound = true;
      }
      } catch (expection) {
        console.error(expection);
      }
    
      this.loadingData = false;
    }, err => {
      console.log(err);
      this.loadingData = false;
    });
  }
  dismiss(data) { 
    this.viewCtrl.dismiss(data);
  }
   
  entitySelected(data) {
    if (this._isEdding) {
    this.dismiss(data);
    } else {
     let modal = this.modal.create(EntityProfilePage, {id: data.id});
     modal.present(); 
    }
  }
  gossipSelected (id) {
     let modal = this.modal.create(CommentsPage, {id: id});
    modal.present();     
  }
  categorySelected (gossip) { 
     let modal = this.modal.create(GossipsPage, {data: gossip});
     modal.present();  
  }
    
  selectChange () {
    this.results = [];
    this.queryText = '';
  }
   getBackground (image) { 
     if (!image) {
     return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5))`);        
     } 
     return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
}
}