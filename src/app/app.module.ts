import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpModule } from '@angular/http';
 
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';
import { Deeplinks } from '@ionic-native/deeplinks';

import { MyApp } from './app.component'; 
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { SearchPage } from '../pages/search/search';
import { CategoriesPage } from '../pages/categories/categories';
import { RequestPage } from '../pages/request/request';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';
import { UserProfilePage, MoreOptionProfile} from '../pages/user-profile/user-profile';
import { EntityProfilePage } from '../pages/entity-profile/entity-profile';
import { AddEntityPage } from '../pages/add-entity/add-entity';
import { AddGossipPage } from '../pages/add-gossip/add-gossip';
import { BookmarkPage } from '../pages/bookmark/bookmark';
import { CommentsPage } from '../pages/comments/comments';
import { ReviewPage } from '../pages/review/review';
import { GossipsPage } from '../pages/gossips/gossips';
import { OneSignal } from '@ionic-native/onesignal';
import { Geolocation } from '@ionic-native/geolocation';

import { MongerApi } from '../providers/api.provider';
import { GlobalProvider } from '../providers/config';

import { Network } from '@ionic-native/network';
import { Keyboard } from '@ionic-native/keyboard';
import { Vibration } from '@ionic-native/vibration';

import { SmartAudio } from '../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { GossipCardComponent } from '../components/gossip-card/gossip-card';
import { EntityCardComponent } from '../components/entity-card/entity-card'; 


@NgModule({
  declarations: [
    MyApp, 
    HomePage,
    AuthPage,
    TabsPage,
    CategoriesPage,
    SearchPage,
    RequestPage,
    UserProfilePage,
    BookmarkPage,
    EntityProfilePage,
    CommentsPage,
    ReviewPage,
    AddEntityPage,
    AddGossipPage,
    GossipsPage,
    GossipCardComponent,
    EntityCardComponent,
    MoreOptionProfile,
    AboutPage,
    TermsPage 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    AuthPage,
    HomePage,
    TabsPage,
    RequestPage,
    CategoriesPage,
    UserProfilePage,
    BookmarkPage,
    SearchPage,
    EntityProfilePage,
    CommentsPage,
    ReviewPage,
    AddEntityPage,
    AddGossipPage,
    GossipsPage,
    MoreOptionProfile,
    AboutPage,
    TermsPage         
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Keyboard,
    GooglePlus, 
    Facebook,
    SocialSharing,
    NativeAudio,
    SmartAudio,
    Vibration,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MongerApi,
    OneSignal,
    GlobalProvider, 
    Camera,
    Deeplinks,
    Geolocation 
  ]
})
export class AppModule {}
