import { Component, OnInit } from '@angular/core';
import { ComunicadoService } from '../comunicado.service';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {
  events = [{
    mes: 'enero',
    events: [{
      id: 1,
      title: "GDR-1313: Pase a producción de Portal Peru, El botón 'Eliminar ítem' debe cumplir con la misma función que realiza para los otros documentos. Cliente reporta problemas de lentitud en el portal para consultar todos sus comprobantes del mes de Octubre."
    }, {
      id: 3,
      title: "GDR-1313: Pase a producción de Portal Peru, El botón 'Eliminar ítem' debe cumplir con la misma función que realiza para los otros documentos. Cliente reporta problemas de lentitud en el portal para consultar todos sus comprobantes del mes de Octubre."
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
  }];

  // getcomu: Array<{date: string, communicated: string}>  = null;
  getcomu: Array<{mes: string, title: string, date: string}>  = null;

  constructor( private _comunicadoService: ComunicadoService) { }


  ngOnInit() {
  this.recuperarTodos();

  }

  // recuperarTodos() {
  //   this._comunicadoService.getcomu2().subscribe( result => {
  //     console.log(result);
  //     this.getcomu = result;
  //    });
  // }



    recuperarTodos() {
    this._comunicadoService.getcomu3().subscribe( result => {
      console.log(result);
      this.getcomu = result;
     });
  }



// prueba

}
