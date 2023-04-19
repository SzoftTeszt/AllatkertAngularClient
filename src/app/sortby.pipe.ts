import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortby'
})
export class SortbyPipe implements PipeTransform {

  transform(array: any[], field:string): any {
    array.sort((a:any,b:any)=>{

        // if (a[field]>b[field]) return 1;
        // else if (a[field]<b[field]) return -1;
        // return 0;

        return a[field].localeCompare(b[field],'hu',{ sensitivity: 'base' });
    })
    return array;
  }

}
