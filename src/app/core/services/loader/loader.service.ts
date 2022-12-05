import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private status: Subject<boolean>;
  public status$: Observable<boolean>
  constructor() {
    this.status = new Subject<boolean>;
    this.status$ = this.status.asObservable();
  }
  public showLoader(value: boolean) {
    this.status.next(value);
  }
}
