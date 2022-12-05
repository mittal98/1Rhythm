import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  //----baseUrl----
  public baseUrl: string;

  //-----Show Artist and studio-----
  public userTypeId: any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  /**
   * get all  userType data
   * @returns userType : Array
   */
  getUserType(): Observable<any> {
    const url = this.baseUrl + "user/userTypes";
    return this.http.get(url);
  }

}
