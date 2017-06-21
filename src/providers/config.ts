export const baseURL = 'http://tgm-inf.cruxservers.in/api/?method=';
import { Injectable } from '@angular/core';
@Injectable()
export class GlobalProvider {
    public playerId: any = null;
    public user: any = {};
    public userId: Number;
    public isMuted: Boolean;
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
}
