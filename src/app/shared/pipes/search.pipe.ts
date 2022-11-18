import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {




  transform(items: any[], field: string, value: string): any[] {

    if (value === '') {
      return items
    }
    if (!items) {

      return [];
    } else if (value.length >= 2) { //new code here
      return items.filter(it => it[field] == value);
    } else {
      return items; // returning all the items. Filtering starts at 2 letters
    }

  }
}