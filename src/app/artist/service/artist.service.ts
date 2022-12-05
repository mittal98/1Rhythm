import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { artistData, artistHistory } from '../artist.model';

@Injectable()
export class ArtistService {

  public baseUrl: string;
  public baseUrls: string;


  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl
    this.baseUrls = "http://localhost:3000/";
  }
  getArtistData(): Observable<artistData[]> {
    const url = this.baseUrl + "artist/allArtists";
    return this.http.get<artistData[]>(url);
  }



  getArtistHistory(): Observable<artistHistory[]> {
    const url = this.baseUrls + "artistHistory";
    return this.http.get<artistHistory[]>(url);
  }
}
