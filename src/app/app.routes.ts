import { RouterModule, Routes} from '@angular/router';

import { AppModule } from './app.module';
import { ComunicadosComponent } from './comunicados/comunicados.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: ComunicadosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
