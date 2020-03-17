import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comunicados'
})
export class ComunicadosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
