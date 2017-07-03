import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { EntityProfilePage } from '../../pages/entity-profile/entity-profile';
import { CommentsPage } from '../../pages/comments/comments';
import { GossipsPage } from '../../pages/gossips/gossips';
import { statusBarColor } from '../../providers/config';
import { DomSanitizer } from '@angular/platform-browser';   
import { RequestPage } from '../request/request';

@Component({
    selector: 'page-search',
    providers: [SharedProvider, MongerApi],
    templateUrl: 'search.html'
})
export class SearchPage {

    lead;
    queryText: string;
    users: Array<any> = [];
    results: Array<any> = [];
    geoNews: Array<any> = [];
    loadingData: boolean = false;
    showNotFound: boolean = false;
    type: string = 'entity';
    param: string = 'entity';
    news: boolean = false;
    private _isEdding: boolean = false;
    constructor(
        private sanitizer: DomSanitizer, public modal: ModalController, public viewCtrl: ViewController, public shared: SharedProvider, public statusBar: StatusBar, public navParams: NavParams, public api: MongerApi, public navCtrl: NavController
    ) {
        this.queryText = '';
        this.param = this.navParams.get('source');
        if (this.navParams.get('source')) {
            this._isEdding = true;
        } 
        if (this.navParams.get('news')) {
            this.news = true;
            this.type = 'news';
            this.param = 'news';
        }
    }
    ionViewDidEnter() {
        let elem: any = document.querySelector('page-search input');
        if (elem) {
            elem.focus();
        }
        this.statusBar.backgroundColorByHexString('#e0e0e0');
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString(statusBarColor);
    }
    clearUsers() {
        this.users = [];
    }
    searchNews(test) {
        this.loadingData = true;
        this.api.searchNews(test).subscribe(data => {
            try {
                if (!data.items.length) {
                    this.showNotFound = true;
                }
            } catch (exception) {
                console.error(exception);
            }
            this.geoNews = data.items;
            this.loadingData = false;
        }, err => {
            this.loadingData = false;
        })
    }
    searchEntity() {
        this.showNotFound = false;
        if (!this.queryText) {
            return false;
        }
        this.loadingData = true;
        this.api.searchEntity(this.queryText, this.type).subscribe(data => {
            this.results = data;
            try {
                if (!this.results.length) {
                    this.showNotFound = true;
                }
            } catch (exception) {
                console.error(exception);
            }

            this.loadingData = false;
        }, err => {
            console.error(err);
            this.loadingData = false;
        });
    }
    dismiss(data) {
        this.viewCtrl.dismiss(data);
    }
    entitySelected(data) {
        if (this._isEdding) {
            this.dismiss(data);
        } else {
            let modal = this.modal.create(EntityProfilePage, { id: data.id });
            modal.present();
        }
    }
    gossipSelected(id) {
        let modal = this.modal.create(CommentsPage, { id: id });
        modal.present();
    }
    categorySelected(gossip) {
        let modal = this.modal.create(GossipsPage, { data: gossip });
        modal.present();
    }
    selectChange() {
        this.results = [];
        this.queryText = '';
    }
    createNewEntity(entityText) { 
        this.shared.Loader.show(); 
        this.api.searchEntityAvailability(entityText).subscribe(response => { 
            this.shared.Loader.hide(); 
            try {
                if (response.length) {
                    this.shared.Toast.show(`Entity with this name already exists, Please add gossip to this entity`, null, 'top', true);
                    this.openEntity(response[0].id)
                } else {
                    this.createEntity(entityText);
                }
            } catch (exception) {
                this.createEntity(entityText);
            }
        }, err => {
            this.shared.Loader.hide();
            this.createEntity(entityText);
        })

    }
    private openEntity(entityId) {
        let modal = this.modal.create(EntityProfilePage, { id: entityId });
        modal.present();
    }
    private createEntity(entityName) { 
    let modal = this.modal.create(RequestPage, { type: 'modal', name: entityName });
        modal.present();
    }
    getBackground(image) {
        if (!image) {
            return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5))`);
        }
        return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
    }
}