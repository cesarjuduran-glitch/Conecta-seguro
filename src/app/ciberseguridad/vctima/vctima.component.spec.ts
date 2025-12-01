import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VctimaComponent } from './vctima.component';

describe('VctimaComponent', () => {
  let component: VctimaComponent;
  let fixture: ComponentFixture<VctimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VctimaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VctimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
