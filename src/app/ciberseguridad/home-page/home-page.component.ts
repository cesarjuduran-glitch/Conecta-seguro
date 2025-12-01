import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxButtonDirective } from 'igniteui-angular';

@Component({
  selector: 'app-home-page',
  imports: [IgxButtonDirective, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
