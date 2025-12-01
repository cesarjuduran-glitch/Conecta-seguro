import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES } from 'igniteui-angular';
import { CiberseguridadComponent } from './ciberseguridad.component';

describe('CiberseguridadComponent', () => {
  let component: CiberseguridadComponent;
  let fixture: ComponentFixture<CiberseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiberseguridadComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiberseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
