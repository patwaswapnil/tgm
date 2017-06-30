import { Component, ViewChild, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavController, Content, ModalController, ActionSheetController, AlertController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { UserProfilePage } from '../user-profile/user-profile';
import { CommentsPage } from '../comments/comments';
import { AddGossipPage } from '../add-gossip/add-gossip';

import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { GossipCardComponent } from '../../components/gossip-card/gossip-card';


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
  public segment: any = 'news';
  private _preScrollArea: any = 0;
  public showSearch: any = true;
  public category: any = 'allCategories';
  public hatedGossips: any[];
  public lovedGossips: any[];
  public geoNews: any[];
  public trendingEntities: any[];
  private _isPageLoaded:any = 0;
  private _firstLoad:boolean = true;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public api: MongerApi, public ngZone: NgZone, public modal: ModalController, public shared: SharedProvider, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    // this.trendingEntity();
    this.getNews();
  }
  ionViewDidEnter() {
     if (this._isPageLoaded > 0) {
       this.tabChange(this.segment, true); 
  } else { 
    this._isPageLoaded =   this._isPageLoaded + Number(1);  
  }
}
getNews() {
   if (this._firstLoad && !this.geoNews) {
      this.shared.Loader.show(); 
  }
  this.api.getNews().subscribe(data => { 
      this.geoNews = data.items;
      this.shared.Loader.closeIfActive(); 
  }, err => {
    console.log(err);
     this.shared.Loader.closeIfActive(); 
  })
}
  topHatedGossips() { 
    if (this._firstLoad && !this.hatedGossips) {
      this.shared.Loader.show(); 
    }
    this.api.topHatedGossips().subscribe(data => {
      this.hatedGossips = data;  
      this.shared.Loader.closeIfActive(); 
    }, err => { 
      console.error(err);
      this.shared.Loader.closeIfActive(); 
    });
  } 

  topLovedGossips() {  
      if (this._firstLoad && !this.lovedGossips) {
      this.shared.Loader.show(); 
    }
    this.api.topLovedGossips().subscribe(data => {
      this.lovedGossips = data; 
      this.shared.Loader.closeIfActive(); 
    }, err => { 
      console.error(err);
      this.shared.Loader.closeIfActive(); 
    });
  }
  trendingEntity() {  
     if (this._firstLoad && !this.trendingEntities) {
      this.shared.Loader.show(); 
    }
    this.api.trendingEntity().subscribe(data => {
      this.trendingEntities = data;  
      this.shared.Loader.closeIfActive();  
    }, err => { 
      console.error(err);
       this.shared.Loader.closeIfActive();  
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
    let modal
    if (this.segment == 'news') {
      modal = this.modal.create(SearchPage, { news: 'news' });
    } else {
      modal = this.modal.create(SearchPage);
    }
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
    } else if (segment == 'news') {
      this.getNews();
    } else if (segment == 'trending') {
      this.trendingEntity();
    }
  }
  addGossips(news) {
    let modal = this.modal.create(AddGossipPage, { type: null, id: 460, data: news })
    modal.onDidDismiss((type) => { 
    });
    modal.present();
  }

}