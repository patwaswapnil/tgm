import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage { 
  constructor(public viewCtrl: ViewController) { }

  ionViewDidLoad() { }
   
  dismiss() {
    this.viewCtrl.dismiss(false);
  }
}
