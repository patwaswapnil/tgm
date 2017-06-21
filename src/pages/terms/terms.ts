import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage { 
  constructor(public viewCtrl: ViewController) { }

  ionViewDidLoad() { }
   
  dismiss() {
    this.viewCtrl.dismiss(false);
  }
}
