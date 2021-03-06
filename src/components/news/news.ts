import { Component, Input } from '@angular/core';
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { ModalController } from 'ionic-angular';
import { CommentsPage } from '../../pages/comments/comments';
import { AddGossipPage } from '../../pages/add-gossip/add-gossip';
import { Observable } from 'rxjs';

@Component({
    selector: 'news',
    templateUrl: 'news.html',
    providers: [SharedProvider]
})
export class NewsComponent {
    @Input() newsList: Observable<Array<any>>;
    @Input() entityId: number;
    @Input() newsText: any;
    constructor(public shared: SharedProvider, private api: MongerApi, public modal: ModalController) { }
    addGossips(news) {
        this.shared.Loader.show();
        this.api.searchEntity(news.title, 'news').subscribe(response => {
            this.shared.Loader.hide();
            try {
                if (response.length) {
                    this.shared.Toast.show('Gossip about this news already exist, Please add comment to this gossip', null, 'top', true);
                    this.openGossip(response[0].id);
                } else {
                    if (!this.entityId) {
                        this.checkForAvailability(news);
                    } else {
                        this.createGossip(news);
                    }
                }
            } catch (exception) {
                if (!this.entityId) {
                    this.checkForAvailability(news);
                } else {
                    this.createGossip(news);
                }
            }
        }, err => {
            this.shared.Loader.hide();
            if (!this.entityId) {
                this.checkForAvailability(news);
            } else {
                this.createGossip(news);
            }
        })

    }
    private openGossip(gossipId) {
        let modal = this.modal.create(CommentsPage, { id: gossipId });
        modal.present();
    }
    checkForAvailability(news) {
        this.shared.Loader.show();
        this.api.searchEntityAvailability(this.newsText).subscribe(response => {
            this.shared.Loader.hide();
            try {
                if (response.length) {
                    this.entityId = response[0].id;
                }
            } catch (exception) {
                console.warn(exception);
            }
            this.createGossip(news);
        }, err => {
            this.shared.Loader.hide();
            this.createGossip(news);
        });
    }
    private createGossip(news) {
        let modal = this.modal.create(AddGossipPage, { type: null, id: this.entityId ? this.entityId : 460, news: news });
        modal.present();
    }
}
