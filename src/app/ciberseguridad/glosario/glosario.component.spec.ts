import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular';
import { GlosarioComponent } from './glosario.component';

describe('GlosarioComponent', () => {
  let component: GlosarioComponent;
  let fixture: ComponentFixture<GlosarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlosarioComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlosarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
