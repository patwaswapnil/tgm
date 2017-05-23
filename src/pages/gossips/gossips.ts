import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular'; 
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';  


@Component({
  selector: 'page-gossips',
  templateUrl: 'gossips.html',
  providers: [SharedProvider, MongerApi],  
})
export class GossipsPage {
  public category;
  public gossips;
  constructor(public api: MongerApi, public navParams: NavParams, public shared: SharedProvider) {
    this.category = this.navParams.get('data')
  }

  ionViewDidLoad() {
    this.getGossips();
  }
  getGossips() {
    this.shared.Loader.show();
    this.api.getMyGossipsByCategory(this.category.term_id).subscribe(data => {
      this.gossips = data;
      console.log(data);
    this.shared.Loader.hide();
    }, err => {
    this.shared.Loader.hide();
      console.log(err);
    })
  } 
}
