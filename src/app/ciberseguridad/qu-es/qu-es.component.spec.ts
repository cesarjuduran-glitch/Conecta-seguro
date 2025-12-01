import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuEsComponent } from './qu-es.component';

describe('QuEsComponent', () => {
  let component: QuEsComponent;
  let fixture: ComponentFixture<QuEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuEsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
