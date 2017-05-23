import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { EntityProfilePage } from '../../pages/entity-profile/entity-profile';
import { SharedProvider } from '../../providers/shared.provider';
import { MongerApi } from '../../providers/api.provider';
import { userId } from '../../providers/config';
import { CommentsPage } from '../../pages/comments/comments';
 
@Component({
  selector: 'gossip-card',
  templateUrl: 'gossip-card.html'
})
export class GossipCardComponent {
    @Input() 
   gossips: any = []; 
  @Output() unFollowEvent = new EventEmitter();
  constructor(public api: MongerApi, public navCtrl: NavController, public modal: ModalController, public shared: SharedProvider) {
   
   }
   ionViewDidLoad () {
     
   }
entityProfile (id) { 
    let modal = this.modal.create(EntityProfilePage,  {id: id});
    modal.present();
  } 
   displayImage (url, title) {
    console.log(url);
    this.shared.imageViewer.show(url, title);
  }
  vote (gossip, type,  index) { 
     console.log(index); 
          if (type == 'positive') { 
            if ( this.gossips[index].action.up != null) {
               this.gossips[index].total_upvotes = Number(this.gossips[index].total_upvotes) - 1;
               this.gossips[index].action.up = null;
            } else {
               this.gossips[index].total_upvotes = Number(this.gossips[index].total_upvotes) + 1;
               this.gossips[index].action.up = {voter: userId};
            } 
          }
         else if (type == 'negative') { 
            if ( this.gossips[index].action.down != null) {
               this.gossips[index].total_downvotes = Number(this.gossips[index].total_downvotes) - 1;
               this.gossips[index].action.down = null;
            } else {
               this.gossips[index].total_downvotes = Number(this.gossips[index].total_downvotes) + 1;
               this.gossips[index].action.down = {voter: userId};
            }
             
          }
        this.api.vote(type == 'positive' ? 0 : 1, gossip.id).subscribe(data => { 
        }, err => {
          console.error(err);
        }); 
  }
  shareVia () {
       this.shared.SocialSharing.shareVia('Welcome to The Gossip Monger, your favorite destination to Gossip about anyone and everyone :) Just download the App and start Gossiping !! ', 'The Gossip Monger');

  }
   openComments (id) {
    let modal = this.modal.create(CommentsPage, {id: id});
    modal.present();     
  }
        followGossip (gossip, index) {
       let action = 'follow'; 
    if ( this.gossips[index].action.follow != null) { 
               this.gossips[index].action.follow = null;
              action = 'unfollow';    
            } else { 
               this.gossips[index].action.follow = {voter: userId};
            }
   if (action == 'follow') {
    this.api.followGossip(gossip.id).subscribe(data => { 
    }, err => {
    })
          } else {
              this.api.unFollowGossip(gossip.id).subscribe(data => { 
                 this.unFollowEvent.next();
    }, err => {
    })
          }
  }
}
