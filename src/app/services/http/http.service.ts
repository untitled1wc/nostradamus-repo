import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map} from 'rxjs/operators';
import { Prediction } from '../../vo/prediction';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private httpClient:HttpClient) { }

  getFullResponse(url): Observable<HttpResponse<String>> {
    return this.httpClient.get<String>(
      url, { observe: 'response' });
  }

  submitPrediction(prediction: Prediction){
    let url ="http://localhost:8080/predict/submit";
    this.httpClient.post<String>(
      url, prediction, { observe: 'response' }).subscribe(response=>{
        console.log(response);
      });
  }

  login(){
    let url ="http://localhost:8080/public/login";
    let usr = {'username': 'alped88', 'password': 'alped88'};
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpClient.post<any>(
      url, usr, { headers: headers, observe: 'response' }).pipe( map ( response=>{
        console.log(response);
        let usrProfile = {'name':'', 'isadmin':'', 'authenticationKey':''};
        if(response.body){
          usrProfile.isadmin = response.body.admin;
          usrProfile.name = response.body.fullName;
          usrProfile.authenticationKey = response.body.username;
        }
        return usrProfile;
      }));
  }
  
}
