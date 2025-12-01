import { Component } from '@angular/core';
import { IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-glosario',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES],
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.scss']
})
export class GlosarioComponent {}
