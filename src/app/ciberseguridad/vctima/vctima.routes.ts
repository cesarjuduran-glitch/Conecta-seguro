import { Routes } from '@angular/router';

import { VctimaComponent } from './vctima.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';

export const routes: Routes = [
  { path: '', component: VctimaComponent, children: [
      { path: '', redirectTo: 'privacy-policy-page', pathMatch: 'full' },
      { path: 'privacy-policy-page', component: PrivacyPolicyPageComponent, data: { text: 'Privacy-Policy-Page' } },
    ]
  },
];
