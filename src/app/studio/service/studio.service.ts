import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { studio } from '../studio.model';

@Injectable({
  providedIn: 'root'
})
export class StudioService {
  //----baseUrl----
  public baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;

  }

  getStudioData(): Observable<studio[]> {
    const url = this.baseUrl + "studio/studios";
    return this.http.get<studio[]>(url);
  }
}
