import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  map, tap
} from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  // Image Sevice call
  getImages() {
    let apiURL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK';

    return this.http.jsonp(apiURL, 'JSONP_CALLBACK').pipe(
      tap(
        data => data
      )
    );
  }

}
