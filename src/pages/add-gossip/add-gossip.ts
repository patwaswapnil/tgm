import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/config';
import { MongerApi } from '../../providers/api.provider';

import { SharedProvider } from '../../providers/shared.provider';
import { SearchPage } from '../../pages/search/search';
@Component({
  selector: 'page-add-gossip',
  templateUrl: 'add-gossip.html',
  providers: [SharedProvider, MongerApi]
})
export class AddGossipPage {
  public type: any;
  public news: any;
  public addGossip: any = { posted_as: this.globalProvider.userId, newsId: null };
  public myEntity: any[];
  public user: any = this.globalProvider.user;
  public id;
  public selectedEntity: any = { category: [{ name: null }] };
  constructor(public actionSheetCtrl: ActionSheetController, public globalProvider: GlobalProvider, public modal: ModalController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public api: MongerApi, public shared: SharedProvider) {
    this.type = this.navParams.get('type'); 
    this.addGossip.feedbackType = this.navParams.get('type');
    console.log(this.addGossip);
    this.id = this.navParams.get('id');
    this.addGossip.id = this.navParams.get('id');
    if (this.navParams.get('data')) {
      this.news = this.navParams.get('data');
      this.addGossip.newsId = this.navParams.get('data').id; 
      this.addGossip.newsTitle = this.navParams.get('data').title; 
      this.addGossip.newsUrl = this.navParams.get('data').url; 
    }
    if (this.navParams.get('news')) {
      this.news = this.navParams.get('news');  
      this.addGossip.newsTitle = this.navParams.get('news').title; 
      this.addGossip.newsUrl = this.navParams.get('news').link; 
    }

  }
  getMyEntity() {
    this.shared.Loader.show();
    this.api.getMyEntity(this.globalProvider.userId).subscribe(data => {
      this.myEntity = data;
      console.log(data);
      this.shared.Loader.hide();
    }, err => {
      this.shared.Loader.hide();
      console.error(err);
    });
  }
  searchEntity() {
    let modal = this.modal.create(SearchPage, { source: 'gossip' });
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
    let isAnonymous; 
    if (gossip.posted_as != 'anonymous') {
      gossip.isAnonymous = 0;
    } else {
      gossip.isAnonymous = 1;
      gossip.posted_as = null;
    }
    gossip.type = gossip.feedbackType;
    gossip.image = this.addGossip.image; 
    this.shared.Loader.show();
    this.api.insertGossip(gossip).subscribe(data => {
      this.shared.Toast.show('Gossip created successfully');
      this.viewCtrl.dismiss();
      console.log(data);
      this.shared.Loader.hide();
    }, err => {
      this.shared.Loader.hide();
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

  ionViewDidLoad() {
    this.getMyEntity();

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  removeImage() {
    this.addGossip.image = '';
  }

}
