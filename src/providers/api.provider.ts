import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL, GlobalProvider } from '../providers/config';

import 'rxjs/Rx';
@Injectable()
export class MongerApi {

  constructor(public globalProvider: GlobalProvider, public http: Http) {}
  getCategories(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getEntityCategories&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  topHatedGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}topUpvotedNegativeGossips&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  topLovedGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}topUpvotedPositiveGossips&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  latestGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}topUpvotedPositiveGossips&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  trendingEntity(pageNo?): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}topGossipedEntities&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  followedEntity(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getMyFollowedEntities&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  followedGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getMyFollowedGossips&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getMyFollowers(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getMyFollowers&userId=${id || this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getMyFollowees(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getMyFollowees&userId=${id || this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getMyGossips(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getMyGossips&userId=${id || this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getMyGossipsByCategory(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getGossipsByCategory&userId=${this.globalProvider.userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getGossip(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getGossip&userId=${this.globalProvider.userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getGossipByEntity(id, feedbackType): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getGossips&feedback_type=${feedbackType}&userId=${this.globalProvider.userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getGossipComments(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getGossipComments&userId=${this.globalProvider.userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  insertComments(msg, id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}insertComment&msg=${msg}&userId=${this.globalProvider.userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  updateProfile(fname, lname, mobile): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}insertComment&fname=${fname}&userId=${this.globalProvider.userId}&lname=${lname}&mobileNo=${mobile}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  insertGossip(data): Observable<any> {
    let headers = new Headers({ "enctype": "multipart/form-data" });
    data.userId = this.globalProvider.userId;
    var form_data = new FormData();
    for (var key in data) {
      form_data.append(key, data[key]);
    }
    return this.http.post(`${baseURL}insertGossip`, form_data, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getUserDetail(id?): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getUserDetails&id=${id}&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getEntityDetail(id?): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getEntity&userId=${this.globalProvider.userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getLatestGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}latestGossips&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  vote(type, gossipId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}vote&id=${gossipId}&type=${type}&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  followGossip(gossipId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}followGossip&userId=${this.globalProvider.userId}&id=${gossipId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  unFollowGossip(gossipId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}unfollowGossip&userId=${this.globalProvider.userId}&id=${gossipId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  deleteGossip(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}deletePost&userId=${this.globalProvider.userId}&postId=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getEntityNews(entityId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getEntityNews&userId=${this.globalProvider.userId}&id=${entityId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  followUser(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}followUnfollow&userId=${this.globalProvider.userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getMyEntity(id, owned?): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}getMyEntities&userId=${id}&owner=${owned ? 'yes' : ''}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  searchEntity(title, type): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}searchApi&title=${title}&type=${type}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  searchEntityAvailability(title): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}exactMatchTitleEntities&title=${title}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  followEntity(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}entityFollow&userId=${this.globalProvider.userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  addEntity(data): Observable<any> {
    let headers = new Headers({ "enctype": "multipart/form-data" });
    data.userId = this.globalProvider.userId;
    var form_data = new FormData();
    for (var key in data) {
      form_data.append(key, data[key]);
    }
    return this.http.post(`${baseURL}insertEntity`, form_data, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getFbUserInfo(access_token): Observable<any> {
    return this.http.get("https://graph.facebook.com/v2.2/me", {
      params: {
        access_token: access_token,
        fields: "name,first_name,last_name,location,picture,email",
        format: "json"
      }
    })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  socialLogin(data): Observable<any> {
    data.player_id = this.globalProvider.playerId;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}socialRegistration&fname=${data.fname}&lname=${data.lname}&email=${data.email}&userId=${data.userId}&source=${data.source}&player_id=${data.player_id}&playerId=${data.player_id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  logout(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`${baseURL}appLogout&userId=${this.globalProvider.userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  // searchNews(title): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   return this.http.get(`${baseURL}getEntitySearchNews&title=${title}`, { headers: headers })
  //     .map((response: Response) => {
  //       return response.json();
  //     })
  //     .catch(this.handleError);
  // }
  getGeoAddress(coords): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&sensor=true`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  } 
  getNews(): Observable<any> { 
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });  
    return this.http.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%2Fsection%3Fgeo%3D${this.globalProvider.location || 'mumbai'}%26output%3Drss%26num%3D40&api_key=o8aomlxn5spw5klgsqjgdlasz9kekalrp2hgptsb`, { headers: headers })
      .map((response: Response) => { 
         return response.json();
      })
      .catch(this.handleError);
  } 
  searchNews(query): Observable<any> {
    if (query) {
      console.log(query);
      query = query.replace(/ /g, "-"); 
    } 
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });  
    return this.http.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fq%3D${query}%26output%3Drss%26num%3D20&api_key=o8aomlxn5spw5klgsqjgdlasz9kekalrp2hgptsb`, { headers: headers })
      .map((response: Response) => { 
         return response.json();
      })
      .catch(this.handleError);
  } 
  handleError(error) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
} 