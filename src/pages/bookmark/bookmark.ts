import { Component } from '@angular/core'; 
import { DomSanitizer} from '@angular/platform-browser'; 
 
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider'; 

@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
  providers: [SharedProvider, MongerApi]
})
export class BookmarkPage {
  segment:any = 'gossips';
  public followedEntities:any[];
  public followedGossips:any[];
  constructor(public sanitizer: DomSanitizer, public api: MongerApi, public shared: SharedProvider) {}

  ionViewDidLoad() {
    this.getFollowedEntities();
    this.getFollowedGossips();
  } 
   getFollowedEntities() {
    this.shared.Loader.show();
    this.api.followedEntity().subscribe(data => {
      this.followedEntities = data;
      console.log(data);
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
   getFollowedGossips() { 
    this.api.followedGossips().subscribe(data => {
      this.followedGossips = data;
      console.log(data);      
    }, err => { 
      console.error(err);
    });
  }
   getBackground (image) {
     return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
} 
}
