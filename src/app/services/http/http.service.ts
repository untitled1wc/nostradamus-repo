import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
  
}
