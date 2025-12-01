import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ciberseguridad', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'complaints-page', loadChildren: () => import('./complaints-page/complaints-page.routes').then(m => m.routes), data: { text: 'Complaints-Page' } },
  { path: 'ciberseguridad', loadChildren: () => import('./ciberseguridad/ciberseguridad.routes').then(m => m.routes), data: { text: 'Ciberseguridad' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
