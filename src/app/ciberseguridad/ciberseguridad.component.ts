import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxToggleActionDirective } from 'igniteui-angular';

@Component({
  selector: 'app-ciberseguridad',
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent, RouterOutlet, RouterLink],
  templateUrl: './ciberseguridad.component.html',
  styleUrls: ['./ciberseguridad.component.scss']
})
export class CiberseguridadComponent {}
