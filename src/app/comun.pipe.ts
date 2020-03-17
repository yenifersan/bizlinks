import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comun'
})

export class ComunPipe implements PipeTransform {
  transform(collection: Array<any>, property: string = 'mes'): Array<any> {
    if(!collection) {
        return null;
    }
    const gc = collection.reduce((previous, current) => {
        if(!previous[current[property]]) {
            previous[current[property]] = [];
        }
        current.events.forEach(x => previous[current[property]].push(x));
        return previous;
    }, {});
    return Object.keys(gc).map(mes => ({ mes: mes, events: gc[mes] }));
}


}
