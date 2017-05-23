import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-add-entity',
  templateUrl: 'add-entity.html'
})
export class AddEntityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  public isCategorySelected:Boolean = false;
  public entityDetail:any = {owner: 'no'};
  public submitted:any = false; 
  public pageTitle = 'Select Category';
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEntityPage');
  }
  categorySelect () {
    this.isCategorySelected = true;
    this.pageTitle = 'Provide Information';
  }

}
