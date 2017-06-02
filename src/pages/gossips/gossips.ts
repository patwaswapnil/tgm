import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular'; 
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';  


@Component({
  selector: 'page-gossips',
  templateUrl: 'gossips.html',
  providers: [SharedProvider, MongerApi],  
})
export class GossipsPage {
  public category;
      private _isPageLoaded:any = 0; 
  public gossips;
  constructor( public viewCtrl: ViewController, public api: MongerApi, public navParams: NavParams, public shared: SharedProvider) {
    this.category = this.navParams.get('data')
  }

  ionViewDidLoad() {
    this.getGossips(true);
  }
  ionViewDidEnter() {
     if (this._isPageLoaded > 0) {
        this.getGossips();
  }  
    this._isPageLoaded =   this._isPageLoaded + Number(1);   
  }
  getGossips(loader?) {
    if (loader){
    this.shared.Loader.show();
    }
    this.api.getMyGossipsByCategory(this.category.term_id).subscribe(data => {
      this.gossips = data; 
      if (loader){
    this.shared.Loader.hide();
    }
  }, err => { 
    if (loader){
    this.shared.Loader.hide();
    }
      console.error(err);
    })
  } 
   dismiss(data) { 
    this.viewCtrl.dismiss(data);
  }
}
