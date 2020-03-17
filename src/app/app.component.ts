import { Component, OnInit } from '@angular/core';
import { ComunicadoService } from './comunicado.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'bizlinks';
  constructor( public service: ComunicadoService) {
    //la funcion getcomu se cambio de getcomu
  this.service.getcomu2().subscribe(
    (data) => {
      console.log(data);
    },
    (err) => {
    console.log(err);
    },
    () => {}
  );

  }
}
