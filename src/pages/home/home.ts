import { Component, ViewChild, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavController, Content, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';

import { SearchPage } from '../search/search';
import { EntityProfilePage } from '../entity-profile/entity-profile';
import { UserProfilePage } from '../user-profile/user-profile';
import { CommentsPage } from '../comments/comments';
import { userId } from '../../providers/config';

import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { GossipCardComponent } from '../components/gossip-card/gossip-card';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SharedProvider, MongerApi],
 animations: [
  trigger('myAnimation', [
    transition('in => void', [
      style({height: '*'}),
      animate(0, style({height: 250}))
    ]),
    transition('* => void', [
      style({height: '*'}),
      animate(250, style({height: 0}))
    ])
  ])
]
})
export class HomePage {
  public segment: any = 'trending';
  private _preScrollArea: any = 0;
  public showSearch: any = true;
  public category: any = 'allCategories';
  public hatedGossips: any[];
  public lovedGossips: any[]; 
  public latestGossips: any[]; 
  public trendingEntities: any[];
  @ViewChild(Content) content: Content;
  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController,public api: MongerApi, public ngZone: NgZone, public modal: ModalController, public shared: SharedProvider, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
  } 
  ionViewDidLoad() {
    this.trendingEntity();
  }
  topHatedGossips() {
    this.shared.Loader.show();
    this.api.topHatedGossips().subscribe(data => {
      this.hatedGossips = data;
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
  getLatestGossips() {
    this.shared.Loader.show();
    this.api.getLatestGossips().subscribe(data => {
      this.latestGossips = data;
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
  topLovedGossips() {
    this.shared.Loader.show();
    this.api.topLovedGossips().subscribe(data => {
      this.lovedGossips = data;
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
  trendingEntity() {
    this.shared.Loader.show();
    this.api.trendingEntity().subscribe(data => {
      this.trendingEntities = data;
    this.shared.Loader.hide();      
    }, err => {
    this.shared.Loader.hide();
      console.error(err);
    });
  }
  update() { 
    this.ngZone.run(() => {
      if (this._preScrollArea > this.content.scrollTop) {
        this.showSearch = true;
      } else {
        this.showSearch = false;
      }
    });
    this._preScrollArea = this.content.scrollTop; 
  }
  search () { 
    let modal = this.modal.create(SearchPage);
           modal.present();
  }
  tabChange (segment) { 
     if (segment == 'topHated' && !this.hatedGossips) {
this.topHatedGossips();
     } else if (segment == 'topRated'&& !this.lovedGossips) {
this.topLovedGossips();
     } else if (segment == 'latest'&& !this.latestGossips) {
this.getLatestGossips();
     }
  }
   
  entityProfile (id, type) {
    console.log('EntityProfile');
    let modal = this.modal.create(EntityProfilePage, {id: id, type});
    modal.present();
  } 
  getBackground (image) {
     return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
}
}