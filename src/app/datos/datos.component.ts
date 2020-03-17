import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  comunicados: any[] = [];
  canComu = true;
  mud = true;
  title = "app";

  constructor() {this.reset(); }
  getComu(name: string) {
  if (!name) {return; }

  }

reset() { this.comunicados = []}
ngOnInit() {

}
}
