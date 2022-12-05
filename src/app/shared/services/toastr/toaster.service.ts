import { Injectable } from '@angular/core';



@Injectable()
export class ToasterService {
  onSuccess(message: any) {
    throw new Error('Method not implemented.');
  }

  // constructor(private toaster: ToasterService) { }
  // onSuccess(message: string) {
  //   return this.toaster.success(message);
  // }
  // onError(message: string) {
  //   return this.toaster.error(message);
  // }

}
