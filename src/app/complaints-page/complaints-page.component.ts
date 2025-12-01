import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-complaints-page',
  imports: [IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective, RouterOutlet, RouterLink],
  templateUrl: './complaints-page.component.html',
  styleUrls: ['./complaints-page.component.scss']
})
export class ComplaintsPageComponent {}
