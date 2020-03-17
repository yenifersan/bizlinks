import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ComunicadoService {
  apiUrl = "http://172.19.64.86:8090/new/";
  constructor(private http: HttpClient) {
    // this.http = httpp
    console.log(http);
  }

  // getComu(){
  //   return:
  // }
  getcomu(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map(
        (data: any) => {
          console.log(data);
          let meses_string = [];
          let prearray = [];

          let returnData = {

            years: [2019],
            data_return: [
              {
              year: 2019,
              month: {
                number: 12,
                name: "Diciembre",
                dates: [
                  "01/12/2019"
                ]
              }
            }],
          };

          data.forEach(element => {
            prearray.push(
              { fecha: element.date, comunicado: element.comunicated })
          });

          data.forEach(element => {
            meses_string.push(
              {mes: element.date}
            )  
          })

          return returnData;
        }
      )

    );
  }

  getcomu2(): Observable<any> {
    return of(
      [
        {
          "_id": {
            "timestamp": 1577118064,
            "counter": 882605,
            "date": "2019-12-23T16:21:04.000+0000",
            "time": 1577118064000,
            "machineIdentifier": 4721417,
            "processIdentifier": -11805,
            "timeSecond": 1577118064
          },
          "date": "2019-12-19T01:36:00.000+0000",
          "comunicated": "GDR-1313: Pase a producción de Portal Peru, El botón 'Eliminar ítem' debe cumplir con la misma función que realiza para los otros documentos. Cliente reporta problemas de lentitud en el portal para consultar todos sus comprobantes del mes de Octubre."
        },
        {
          "_id": {
            "timestamp": 1577118132,
            "counter": 882606,
            "date": "2019-11-23T16:22:12.000+0000",
            "time": 1577118132000,
            "machineIdentifier": 4721417,
            "processIdentifier": -11805,
            "timeSecond": 1577118132
          },
          "date": "2019-11-19T00:34:00.000+0000",
          "comunicated": "GDR-1312: Pase a producción del Generador de PDF. Requerimiento de las empresas STARBRANDS y PLUS COSMETICA."
        },
        {
          "_id": {
            "timestamp": 1577118141,
            "counter": 882607,
            "date": "2019-12-23T16:22:21.000+0000",
            "time": 1577118141000,
            "machineIdentifier": 4721417,
            "processIdentifier": -11805,
            "timeSecond": 1577118141
          },
          "date": "2019-10-18T01:30:00.000+0000",
          "comunicated": "GDR-1303: Pase Portal OSE - Producción (FRONTEND). Correccion en el monto total al generar el excel."
        },
        {
          "_id": {
            "timestamp": 1577118160,
            "counter": 882608,
            "date": "2019-12-23T16:22:40.000+0000",
            "time": 1577118160000,
            "machineIdentifier": 4721417,
            "processIdentifier": -11805,
            "timeSecond": 1577118160
          },
          "date": "2019-12-18T00:07:00.000+0000",
          "comunicated": "GDR-1301: Pase a producción del Generador de PDF. Requerimiento de la empresa KAESER."
        },
        {
          "_id": {
            "timestamp": 1577118167,
            "counter": 882609,
            "date": "2019-12-23T16:22:47.000+0000",
            "time": 1577118167000,
            "machineIdentifier": 4721417,
            "processIdentifier": -11805,
            "timeSecond": 1577118167
          },
          "date": "2019-09-16T01:40:00.000+0000",
          "comunicated": "GDR-1299: Pase a producción del Portal Peru. En algunas casuisticas de negocio los cálculos no están correctos y otros los tag no se están generando."
        },
        {
          "_id": {
            "timestamp": 1577118179,
            "counter": 882610,
            "date": "2019-12-23T16:22:59.000+0000",
            "time": 1577118179000,
            "machineIdentifier": 4721417,
            "processIdentifier": -11805,
            "timeSecond": 1577118179
          },
          "date": "2019-01-12T00:30:00.000+0000",
          "comunicated": "GDR-1289: Pase a producción del Generador de PDF. Corrección de incidencias de las empresas CEMENTO INCA y CUPRICA"
        }
      ]
    ).pipe();

  }

  getcomu3(): Observable<any> {
    return of ( [{
      mes: 'enero',
      events: [{
        id: 1,
        title: 'First event'
      }, {
        id: 3,
        title: 'Third event'
      }]
    },{
      mes: 'febrero',
      events: [{
        id: 4,
        title: 'Fourth event'
      }, {
        id: 5,
        title: 'Fifth event'
      }]
    }, {
      mes: 'enero',
      events: [{
        id: 2,
        title: 'Second event'
      }]
    }, {
      date: '2017-12-31',
      events: [{
        id: 4,
        title: 'Last event'
      }]
    },
    {
      mes: 'marzo',
      events: [{
        id: 4,
        title: 'Last event'
      }]
    },
        {
      mes: 'marzo',
      events: [{
        id: 4,
        title: 'Last event'
      }]
    },
       {
      mes: 'marzo',
      events: [{
        id: 4,
        title: 'Last event'
      }]
    }]);
  }
}
