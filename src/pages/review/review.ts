import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular'; 
import { SharedProvider } from '../../providers/shared.provider'
import { MongerApi } from '../../providers/api.provider'
import { userId } from '../../providers/config';
import { AddGossipPage } from '../add-gossip/add-gossip';
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
    providers: [SharedProvider, MongerApi]
})
export class ReviewPage {
  type:any = 1;
  private _id:any;
  public entityGossips:any[];
  bgImage = 'assets/img/positive.jpg';
  constructor(public api: MongerApi, public shared: SharedProvider, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modal: ModalController) {
    this.type = navParams.get('type');
    if (this.type == 1) {
      this.bgImage = 'assets/img/negative.jpg'
    }
    // this._id = 31; //hard coded
    this._id = this.navParams.get('id');
  } 
   ionViewDidLoad() { 
    this.getGossips();
  }
  addGossips () {
    let modal = this.modal.create(AddGossipPage, {type: this.type, id:  this._id})
     modal.onDidDismiss((type) => {
            this.getGossips();
        });
    modal.present(); 
  }

  getGossips () {
    this.shared.Loader.show();
    this.api.getGossipByEntity(this._id, this.type).subscribe(data => {
      this.entityGossips = data;
    this.shared.Loader.hide();
    }, err => {
    console.log(err);
    this.shared.Loader.hide();      
    })
  } 
    
  dismiss () {
    this.viewCtrl.dismiss();
  }
}
