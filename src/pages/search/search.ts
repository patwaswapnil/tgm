import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { EntityProfilePage } from '../../pages/entity-profile/entity-profile';

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
  constructor(
    public modal: ModalController, public viewCtrl: ViewController,  public shared: SharedProvider, public statusBar: StatusBar, public navParams: NavParams, public api: MongerApi
  ) {
    this.queryText = '';
    this.param = this.navParams.get('source');
    console.log(this.navParams.get('source'));
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
      if (!this.results.length) {
        this.showNotFound = true;
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
    if (this.type) {
    this.dismiss(data);
    } else {
     let modal = this.modal.create(EntityProfilePage, {id: data.id});
     modal.present(); 
    }
  }
}