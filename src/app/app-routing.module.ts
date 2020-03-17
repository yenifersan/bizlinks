import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComunicadosComponent } from './comunicados/comunicados.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: ComunicadosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
