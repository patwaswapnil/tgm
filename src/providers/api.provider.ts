import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL, userId } from '../providers/config';

import 'rxjs/Rx';
@Injectable()
export class MongerApi {

  constructor(public http: Http) { }
  getCategories(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getEntityCategories&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  topHatedGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}topUpvotedNegativeGossips&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  topLovedGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}topUpvotedPositiveGossips&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  latestGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}topUpvotedPositiveGossips&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  trendingEntity(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}topGossipedEntities&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  followedEntity(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getMyFollowedEntities&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  followedGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getMyFollowedGossips&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getMyFollowers(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getMyFollowers&userId=${id || userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getMyFollowees(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getMyFollowees&userId=${id || userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getMyGossips(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getMyGossips&userId=${id || userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getMyGossipsByCategory(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getGossipsByCategory&userId=${userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getGossip(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getGossip&userId=${userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getGossipByEntity(id, feedbackType): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getGossips&feedback_type=${feedbackType}&userId=${userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getGossipComments(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getGossipComments&userId=${userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  insertComments(msg, id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}insertComment&msg=${msg}&userId=${userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  updateProfile(fname, lname, mobile): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}insertComment&fname=${fname}&userId=${userId}&lname=${lname}&mobileNo=${mobile}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  insertGossip(entityId, content, isAnonymous, type, posted_as, via): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}insertGossip&id=${entityId}&gossip=${content}&isAnonymous=${isAnonymous}&feedbackType=${type}&via=${via}&userId=${userId}&posted_as=${posted_as}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getUserDetail(id?): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getUserDetails&id=${id}&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getEntityDetail(id?): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getEntity&userId=${userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  getLatestGossips(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}latestGossips&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }   
  vote(type, gossipId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}vote&id=${gossipId}&type=${type}&userId=${userId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }      
  followGossip(gossipId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}followGossip&userId=${userId}&id=${gossipId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }      
  unFollowGossip(gossipId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}unfollowGossip&userId=${userId}&id=${gossipId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }      
  getEntityNews(entityId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getEntityNews&userId=${userId}&id=${entityId}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }      
  followUser(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}followUnfollow&userId=${userId}&id=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }        
  getMyEntity(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getMyEntities&userId=${id}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }      
  searchEntity(title, type): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}getEntitySearch&title=${title}&type=${type}`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }      
  followEntity(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(`${baseURL}entityFollow&userId=${userId}&id=${id}`, { headers: headers })
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