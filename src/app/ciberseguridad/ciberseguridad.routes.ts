import { Routes } from '@angular/router';

import { CiberseguridadComponent } from './ciberseguridad.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuEsComponent } from './qu-es/qu-es.component';
import { RiesgosComponent } from './riesgos/riesgos.component';
import { PrevenirComponent } from './prevenir/prevenir.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { GlosarioComponent } from './glosario/glosario.component';
import { CrditosComponent } from './crditos/crditos.component';

export const routes: Routes = [
  { path: '', component: CiberseguridadComponent, children: [
      { path: '', redirectTo: 'home-page', pathMatch: 'full' },
      { path: 'home-page', component: HomePageComponent, data: { text: 'Home-Page' } },
      { path: 'qu-es', component: QuEsComponent, data: { text: 'Qu-Es' } },
      { path: 'riesgos', component: RiesgosComponent, data: { text: 'Riesgos' } },
      { path: 'prevenir', component: PrevenirComponent, data: { text: 'Prevenir' } },
      { path: 'privacidad', component: PrivacidadComponent, data: { text: 'Privacidad' } },
      { path: 'víctima', loadChildren: () => import('./vctima/vctima.routes').then(m => m.routes), data: { text: 'Vctima' } },
      { path: 'ayuda', component: AyudaComponent, data: { text: 'Ayuda' } },
      { path: 'glosario', component: GlosarioComponent, data: { text: 'Glosario' } },
      { path: 'crditos', component: CrditosComponent, data: { text: 'Crditos' } },
    ]
  },
];
