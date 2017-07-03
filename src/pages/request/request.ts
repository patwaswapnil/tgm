import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/config';
import { DomSanitizer } from '@angular/platform-browser';  
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
  public type: any;
  public categories: any;
  public icon = 'assets/img/loved.png';
  public addGossip: any = { posted_as: this.globalProvider.userId, image: null };
  public user: any = this.globalProvider.user;
  public id; 
  public segment: any = 'entity';
  public selectedEntity: any = { category: [{ name: null }] };
  public showNotFound: boolean = false;

  public isCategorySelected: Boolean = false;
  public entityDetail: any = { owner: 'no', image: null };
  public myEntities: any[];
  public selectedCat: any;
  public submitted: any = false;
  public isModal: boolean = false;
  constructor(public actionSheetCtrl: ActionSheetController, private sanitizer: DomSanitizer, public globalProvider: GlobalProvider, public modal: ModalController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public api: MongerApi, public shared: SharedProvider, private viewCtrl: ViewController, private _ngZone: NgZone) {
    if (this.navParams.get('type')) { 
        this.isModal = true;  
    }
   }
  
  private chooseImage(source) {
    this.shared.uploadMedia.image(source)
      .then((imageData) => {
        if (this.segment == 'gossip') {
          this.addGossip.image = 'data:image/png;base64,' + imageData;
        } else {
          this.entityDetail.image = 'data:image/png;base64,' + imageData;          
        }
      }, (err) => {
      });
  }
  ionViewDidLoad() {
    this.getCategories();
    this.getMyEntity();
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
  getMyEntity() { 
    this.api.getMyEntity(this.globalProvider.userId, true).subscribe(data => {
      this.myEntities = data; 
    }, err => { 
      console.error(err);
    });
  }
  searchEntity() {
    let modal = this.modal.create(SearchPage, { source: 'gossip' });
    modal.onDidDismiss(data => { 
      if (data) {
        this.id = data.id;
        this.addGossip.id = data.id;
        this.selectedEntity = data;
      } else {

      }
    });
    modal.present();
  }
  reset () {
    this.isCategorySelected = false;
    this.entityDetail = { owner: 'no', image: null };
  }
  ionViewDidEnter () {
    this.reset();
    this.getMyEntity();
  }
  entityProfile(id, type) { 
    let modal = this.modal.create(EntityProfilePage, { id: id, type });
    modal.present();
  } 
   getEntityBackground(image) {
    if (!image) {
      return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5))`);
    }
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image.url})`);
  }
  categorySelect(data) {
    this.isCategorySelected = true; 
    this.entityDetail.category = data.term_id;
    this.selectedCat = data.name;
    if (this.navParams.get('name')) {
      this._ngZone.run(() => { 
      this.entityDetail.entity = this.navParams.get('name'); 
      });
    }
  }
  getCategories() {
    this.api.getCategories().subscribe(data => {
      this.categories = data;
    }, err => {
      console.error(err);
    })
  }
  addEntity(form) {
    if (form.valid) { 
      this.shared.Loader.show('Adding Entity..');
      this.api.addEntity(this.entityDetail).subscribe(response => {
        if (response) {
          this.shared.Loader.hide();
          this.shared.Toast.show('Entity added successfully');
          this.entityDetail = { owner: 'no', image: null };
          this.navCtrl.push(EntityProfilePage, {id: response});

        }
      }, err => {
        this.shared.Loader.hide();
        this.shared.Toast.show('Error: ' + err);
      })
    } else {
      this.shared.Toast.show('Please fill all mandatory fields.');
    } 
    return false;
  }
  insertGossip(gossip) {  
    if (gossip.posted_as != 'anonymous') {
      gossip.isAnonymous = 0;
    } else {
      gossip.isAnonymous = 1;
      gossip.posted_as = null;
    }
    gossip.image = this.addGossip.image;
    gossip.type = gossip.feedbackType;
    this.shared.Loader.show();
    this.api.insertGossip(gossip).subscribe(data => {
      this.shared.Toast.show('Gossip created successfully');
      this.addGossip = { posted_as: this.globalProvider.userId };
      this.selectedEntity = { category: [{ name: null }] };

      let modal = this.modal.create(EntityProfilePage, { id: gossip.id, type: gossip.feedbackType });
      modal.present(); 
      this.shared.Loader.hide();
    }, err => {
      this.shared.Loader.hide();
      console.error(err);
    });
  }
  removeImage() {
    this.addGossip.image = '';
    this.entityDetail.image = '';
  }

  dismiss() { 
    this.viewCtrl.dismiss();
  }
  
}
