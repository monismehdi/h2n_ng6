import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, switchMap, flatMap, filter  } from 'rxjs/operators';


// import { Http } from '@angular/common/http';

// import 'rxjs/add/operator/map';

// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {

  baseUrl:String;

  constructor(private http: Http) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
   }

   fetchStories(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/topstories.json`)
      .pipe(map(data => data.json()));
  }

  fetchItem(id : Number): Observable<any>{
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
                    .pipe(map(response => response.json()));
  }

}
