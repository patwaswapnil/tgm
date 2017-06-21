import { Component, Input } from '@angular/core';
import { NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { MongerApi } from '../../providers/api.provider';
import { SharedProvider } from '../../providers/shared.provider';
import { GossipsPage } from '../gossips/gossips';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable, Observer } from "rxjs";

@Component({
  selector: 'page-add-entity',
  templateUrl: 'add-entity.html'
})
export class AddEntityPage {
  @Input() categories: any = [{}];
  constructor(public actionSheetCtrl: ActionSheetController, public viewController: ViewController, private sanitizer: DomSanitizer, public navCtrl: NavController, public shared: SharedProvider, public api: MongerApi) { }
  public isCategorySelected: Boolean = false;
  public entityDetail: any = { owner: 'no', image: null };
  public selectedCat: any;
  public submitted: any = false;
  public pageTitle = 'Select Category';
  ionViewDidLoad() { 
    
  }
 
  categorySelect(data) {
    this.isCategorySelected = true;
    this.pageTitle = 'Provide Information';
    this.entityDetail.category = data.term_id;
    this.selectedCat = data.name;
  }
 
  getBackground(image) {
    if (!image) {
      return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5))`);
    }
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image.url})`);
  }

  private chooseImage(source) {
    this.shared.uploadMedia.image(source)
      .then((imageData) => {
        this.entityDetail.image = 'data:image/png;base64,' + imageData;
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
  addEntity(form) {
    if (form.valid) {
      // if (!this.entityDetail.image) {
      //     this.shared.Toast.show('Click image icon to attach an image.'); 
      //     return;
      // } 
      this.shared.Loader.show('Adding Entity..');
      this.api.addEntity(this.entityDetail).subscribe(response => {
        if (response) {
          this.shared.Loader.hide();
          this.shared.Toast.show('Entity added successfully');
          this.navCtrl.pop();
        }
      }, err => {
        this.shared.Loader.hide();
        this.shared.Toast.show('Error: ' + err);
      })
    } else {

      this.shared.Toast.show('Please fill all mandatory fields.');

    }
    console.log(this.entityDetail);
    return false;
  }
}
