export const baseURL = 'http://thegossipmonger.com/api/?method=';
import { Injectable } from '@angular/core';
export const statusBarColor: string = '#ac61cd';
export const appIntro = {home: 'http://thegossipmonger.com/app_intro/android/home.jpg', entity: 'http://thegossipmonger.com/app_intro/android/entity.jpg', news: 'http://thegossipmonger.com/app_intro/android/news.jpg'};
@Injectable()
export class GlobalProvider {
    public playerId: any = null;
    public user: any = {};
    public userId: Number;
    public isMuted: Boolean;
    public location: String= 'Mumbai'; 
    setAuthData(data) { 
        try {
             this.user = JSON.parse(data);
        } catch (e) {
             this.user = data;            
        } 
        this.userId = this.user.ID;
    }
    setPlayerId(id) {  
        this.playerId = id;
    }
    toggleMute (value) {
        this.isMuted = value;
    }
    dropAuthData() {
        this.userId = null;
        this.user = null;
    }
    setLocation(location: String) { 
        if (location) {
            location = location.replace(' ', '-');
        }
        this.location = location;
    }
}
