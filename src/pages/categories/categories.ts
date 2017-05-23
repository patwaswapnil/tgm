import { Component } from '@angular/core';
import { MongerApi } from '../../providers/api.provider';
import { SharedProvider } from '../../providers/shared.provider';
import { NavController } from 'ionic-angular';
import { GossipsPage } from '../gossips/gossips';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
  providers: [SharedProvider, MongerApi]
})
export class CategoriesPage {
  public categories: any [];
  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public shared: SharedProvider, public api: MongerApi) {}

  ionViewDidLoad() {
    this.getCategories();
  }

  getCategories() {
    this.shared.Loader.show();
    this.api.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    this.shared.Loader.hide();
    }, err => {
    this.shared.Loader.hide();
      console.log(err);
    })
  }
  gossips (gossip) {
    this.navCtrl.push(GossipsPage, {data: gossip});
  }
   
   getBackground (image) {
     if (!image) {
     return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5))`);        
     } 
     return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image.url})`);
}
}
