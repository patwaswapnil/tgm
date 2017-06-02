import { Component, ViewChild, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavController, Content, ModalController, ActionSheetController, AlertController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { UserProfilePage } from '../user-profile/user-profile';
import { CommentsPage } from '../comments/comments';

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
        style({ height: '*' }),
        animate(0, style({ height: 250 }))
      ]),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
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
  private _isPageLoaded:any = 0;
  private _firstLoad:boolean = true;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public api: MongerApi, public ngZone: NgZone, public modal: ModalController, public shared: SharedProvider, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    this.trendingEntity();
  }
  ionViewDidEnter() {
     if (this._isPageLoaded > 0) {
       this.tabChange(this.segment, true); 
  } else { 
    this._isPageLoaded =   this._isPageLoaded + Number(1);  
  }
  }
  topHatedGossips() { 
    if (this._firstLoad) {
      this.shared.Loader.show(); 
    }
    this.api.topHatedGossips().subscribe(data => {
      this.hatedGossips = data;  
       if (this._firstLoad) {
      this.shared.Loader.hide(); 
    }
    }, err => { 
      console.error(err);
         if (this._firstLoad) {
      this.shared.Loader.hide(); 
    }
    } );
  }
  getLatestGossips() {  
     if (this._firstLoad) {
      this.shared.Loader.show(); 
    } 
    this.api.getLatestGossips().subscribe(data => {
      this.latestGossips = data; 
       if (this._firstLoad) {
      this.shared.Loader.hide(); 
    }
    }, err => { 
         if (this._firstLoad) {
      this.shared.Loader.hide(); 
    }
      console.error(err);
    });
  }
  topLovedGossips() {  
      if (this._firstLoad) {
      this.shared.Loader.show(); 
    }
    this.api.topLovedGossips().subscribe(data => {
      this.lovedGossips = data; 
         if (this._firstLoad) {
      this.shared.Loader.hide(); 
    }
    }, err => { 
      console.error(err);
       if (this._firstLoad) {
      this.shared.Loader.hide(); 
    }
    });
  }
  trendingEntity() {  
     if (this._firstLoad) {
      this.shared.Loader.show(); 
    }
    this.api.trendingEntity().subscribe(data => {
      this.trendingEntities = data; 
        if (this._firstLoad) {
      this.shared.Loader.hide(); 
    } 
    }, err => { 
      console.error(err);
      if (this._firstLoad) {
      this.shared.Loader.hide(); 
    } 
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
  search() {
    let modal = this.modal.create(SearchPage);
    modal.present();
  }
  tabChange(segment, loader) {
    if (loader) {
     this._firstLoad = false;
    } else {
     this._firstLoad = true; 
    }
    if (segment == 'topHated') {
      this.topHatedGossips();
    } else if (segment == 'topRated') {
      this.topLovedGossips();
    } else if (segment == 'latest') {
      this.getLatestGossips();
    } else if (segment == 'trending') {
      this.trendingEntity();
    }
  }

}