import { Component } from '@angular/core'; 
import { Events } from 'ionic-angular'; 
import { HomePage } from '../home/home'; 
import { CategoriesPage } from '../categories/categories'; 
import { RequestPage } from '../request/request'; 
import { UserProfilePage } from '../user-profile/user-profile'; 
import { BookmarkPage } from '../bookmark/bookmark'; 

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  appIntroImg: string;
  tab1Root: any = CategoriesPage;
  tab2Root: any = RequestPage;
  tab3Root: any = HomePage;
  tab4Root: any = BookmarkPage;
  tab5Root: any = UserProfilePage;

  constructor(public events: Events) {  }
  ionViewDidLoad() { 
    this.events.publish('root:created', Date.now());
    this.events.subscribe('app:intro', (data) => {
      this.appIntroImg = data;
    }
  )}
  
}
