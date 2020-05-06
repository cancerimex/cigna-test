import { Pipe, PipeTransform } from '@angular/core';

/**
 * Filter Pipe
 *
 * @example
 *  <input type="text" [(ngModel)]="search" [formControl]="search" />
 *  <!-- Then on the ngFor loop -->
 *  <tr *ngFor="let product of products | filter: search">
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    if (searchText !== undefined) {
      return items.filter(item => {
        const filter = Object.keys(item);
        return filter.some(
          key => {
            if (typeof item[key] === 'string') {
              return item[key].toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
            }
            return false;
          }
        );
      });
    } else {
      return items;
    }
  }

}
